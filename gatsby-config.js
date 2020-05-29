/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        "gatsby-disable-404",
        `gatsby-plugin-sass`,

        // CSVから情報を取得したい場合
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                extensions: [`csv`],
                path: `${__dirname}/contents/csv`,
            },
        },
        `gatsby-transformer-csv`,

        // MS Wordで記事を書く場合
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `docx`,
                extensions: [`docx`],
                path: `${__dirname}/contents/docx`,
            },
        },
        `gatsby-transformer-ms-word`,

        //  markdownで記事を書く場合
        // `gatsby-transformer-remark`,
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `markdown`,
        //         path: `${__dirname}/contents/markdown`,
        //     },
        // },
    ]
}
