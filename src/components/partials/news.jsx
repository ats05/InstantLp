import React from "react"
import "./styles/news.scss"
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const data = useStaticQuery(query);
    const newsList = data.allNewsCsv.nodes;

    let newsElements = [];
    newsList.forEach(news => {
            if (news.url !== "") {
                let newWindow = news.newWindow ? "_brank" : null;
                newsElements.push(
                    <div className="news__row">
                        <div className="news__date">{news.date}</div>
                        <div className="news__description">
                            <a href={news.url} target={newWindow} rel="noopener" className="news__link"
                               dangerouslySetInnerHTML={{__html: news.text}}/>
                        </div>
                    </div>
                )
            }
            else {
                newsElements.push(
                    <div className="news__row">
                        <div className="news__date">{news.date}</div>
                        <div className="news__description" dangerouslySetInnerHTML={{__html: news.text}}/>
                    </div>
                )
            }

        });
    return (
        <>
            <h3 className="news__heading">NEWS</h3>
            <div className="news__table">
                {newsElements}
            </div>
        </>
    )
}


export const query = graphql`
  query {
    allNewsCsv(sort: {order: DESC, fields: id}) {
      nodes {
        id
        url
        date
        text
        newWindow
      }
    }
  }
`