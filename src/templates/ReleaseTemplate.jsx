import React from "react"
import { graphql } from "gatsby"
import * as Moment from 'moment';
import "../style/release.scss"
import Head from "../components/metas/head"
import Footer from "../components/partials/footer"
import BackgroundImage from "../components/partials/fixedBackgroundImage";
import BackButton from "../components/partials/backButton"


// 文章中から抜き出してくる変数
const VAR_TITLE = /@variable:title@(.*?)@end@/;
const VAR_DATE = /@variable:date@(.*?)@end@/;

// const VAR_URL = /@variable:url@(.*?)@end@/

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    let content = data.docx.content

    // タイトルと日付をパース
    const title = content.match(VAR_TITLE)[1];
    content = content.replace(VAR_TITLE, "");

    const dateString = content.match(VAR_DATE)[1];
    content = content.replace(VAR_DATE, "");
    const date = Moment(dateString).format("YYYY/M/D");

    return (
        <>
            <Head pageTitle={"RELEASE"} subTitle={title}/>
            <div className="content">
                <BackgroundImage />
                <section>
                    <main className="release__main">
                        <div className="body__contents">
                            <div className="release__headingArea">
                            <h2 className="module__heading release__heading">{title}</h2>
                            <p className="release__date">{date}</p>
                            </div>
                            <div className="release__body" dangerouslySetInnerHTML={{ __html: content }}/>
                        </div>
                    </main>
                </section>
                <BackButton />
            </div>
            <Footer/>
        </>
    )
}
export const pageQuery = graphql`
  query($id: String!) {
    docx(id: { eq: $id }) {
      name
      content
    }
  }
`
