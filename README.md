#はじめに


## セットアップ
```
$ npm i
$ npm run develop
```
=> HPが [localhost:8000](localhost:8000)で開きます

=> GraphQL UIが [http://localhost:8000/___graphql](http://localhost:8000/___graphql)で開きます。

※GoogleDriveを使う場合

1. 下記urlから、GoogleDriveのAPIトークンを取得します
https://developers.google.com/drive/api/v3/quickstart/nodejs
種類は「Desktop App」でOK。

2. credential.jsonをダウンロードし、`/credentials`ディレクトリに保存します。

3. `npm run contents:get`を実行。
`uthorize this app by visiting this url: https://accounts.google.com/....`
と出るので、URLをコピペしてアクセス。

4. コードをコピーして、ターミナルに貼り付けて、エンター。


## ディレクトリ構造
```
.
├── contents    コンテンツ内容の置き場
│   ├── csv
│   ├── docx
├── contents-backup     コンテンツのバックアップ
├── credentials         GoogleDriveなどの認証ファイル等の置き場
├── gatsby-config.js
├── gatsby-node.js
├── package-lock.json
├── package.json
├── public              公開ファイルの出力先
├── scripts             コンテンツ更新用nodeスクリプト置き場
│   └── getContents
├── src                 サイトのソースコード
│   ├── components      Reactコンポーネント集
│   │   └── partials
│   │   │   └── styles  Reactコンポーネントのcss
│   ├── pages
│   │   └── index.jsx   トップページのjsx
│   ├── style           個別画面css置き場
│   │   ├── _common.scss
│   │   ├── index.scss
│   │   └── release.scss
│   └── templates       個別ページのテンプレート置き場
│       └── ReleaseTemplate.jsx
└── static              画像などの静的ファイル置き場
    └── images
```


## 使用可能なコマンド

### ローカルサーバの起動

```

$ npm run develop

```
 
 

[ローカルサーバー（localhost:8000）](localhost:8000)が立ち上がります。
`/src`ディレクトリ内が監視対象になっており、ファイルを編集した場合自動的に反映されます。




### コンテンツの更新

```
$ npm run contents:update
```
`/contents`ディレクトリの中身を`/contents-backup`にコピーしてから、
`/contents`ディレクトリの中身を最新にします。

```
$ npm run contents:restore": "npm-run-all contents:restore:*",
```
`/contents-backup`ディレクトリの中身を`/contents`に復元します。

```
$ npm run contents:delete
```
`/contents`ディレクトリを空にします。

```
$ npm run contents:delete:backup
```
`/contents-backup`ディレクトリを空にします。



### 本番環境向けビルド

`$ npm run build`

`/public`ディレクトリに本番環境向けファイルがビルドされます。
`/public/index.html`がエントリーポイントになるよう、サーバの設定を行なって下さい。



下書きページにBASIC認証をかける場合
```
server {
    listen 80;
    root ...../public/;
    index index.html;

    location /draft/ {
        auth_basic "Restricted";                   # 認証時に表示されるメッセージ
        auth_basic_user_file /etc/nginx/.htpasswd; # .htpasswdファイルのパス
    }
}
```


## 現状の課題
-[ ] 404ページを作っていないので、エラーが出る
-[ ] GoogleDrive以外の方法があった方がいい
