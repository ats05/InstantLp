import React from "react"
import {Helmet} from "react-helmet"


/**
 *
 * @param props.pageTitle
 * @param props.subTitle （任意項目）
 * @returns {*}
 * @constructor
 */
export default function Head(props) {

    // サブタイトルがあれば追加する
    const title = props.pageTitle
        + (!props.subTitle ? "" : " | " + props.subTitle);

    return (
        <Helmet>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <meta name="Description" content="ビルドしてすぐに公開。DBも不要。セキュリティも最低限"/>
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:100,300,600|Noto+Serif+JP:300&display=swap"
                  rel="stylesheet"/>
            <link rel="shortcut icon" href="/images/favicon.ico"/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-70279810-3"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-70279810-3');
                `
                }}
            />
        </Helmet>
    );
}
