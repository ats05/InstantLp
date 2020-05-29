const fs = require('fs');
const readline = require('readline');
const {
    google
} = require('googleapis');
var zlib = require('zlib');
const os = require('os');
const path = require('path');
const GoogleAuth = require('./GoogleAuth.js');

const OUTPUT_PATH = __dirname + "/../../contents/csv/";

// GoogleDriveのディレクトリID
const FOLDER_ID = `19PDnHRtDQFe31FjOeftUIDJNc0OoQzWV`;


let gAuth = new GoogleAuth();

getFiles(gAuth.oAuthClient).catch((error) => {
    console.log(error);
});



async function getFiles(auth) {
    const drive = google.drive({
        version: 'v3',
        auth
    });

    const params = {
        q: `'${FOLDER_ID}' in parents and trashed = false`,
    }

    let fileList = [];

    try {
        const res = await drive.files.list(params);
        const files = res.data.files;
        if (files.length) {
            files.map((file) => {
                fileList.push({
                    name: file.name,
                    id: file.id
                });
            });
        } else {
            console.log('No files found.');
        }
    } catch (err) {
        console.log('The API returned an error: ' + err);
    }

    console.log(fileList);
    fileList.forEach(file => {

        return drive.files
            .get({
                fileId: file.id,
                alt: 'media',
                supportsAllDrives: true
            }, {
                responseType: 'stream'
            })
            .then(res => {
                return new Promise((resolve, reject) => {
                    const filePath = path.join(OUTPUT_PATH,file.name);
                    console.log(`writing to ${filePath}`);
                    const dest = fs.createWriteStream(filePath);
                    let progress = 0;

                    res.data
                        .on('end', () => {
                            console.log('Done.');
                            resolve(filePath);
                        })
                        .on('error', err => {
                            console.error('Error downloading file.');
                            reject(err);
                        })
                        .on('data', d => {
                            progress += d.length;
                            if (process.stdout.isTTY) {
                                process.stdout.clearLine();
                                process.stdout.cursorTo(0);
                                process.stdout.write(`Downloaded ${progress} bytes`);
                            }
                        })
                        .pipe(dest);
                });
            })
            .catch((error) => {
                console.log("Error!!")
                console.log(error);
            });
    });

}
