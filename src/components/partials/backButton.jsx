import React from "react"
import "./styles/backButton.scss";


/**
 *
 * @param data.href
 * @returns {*}
 *
 * <BackButton /> → ルートURLへのリンク(/)を生成します。
 * <BackButton href="hoge" /> → "hoge"へのリンクを生成します。
 */
export default function BackButton(data) {
    let href = data.href ? data.href : "/" ;
    return (
        <div className="backButton__area">
            <a href={href} className="backButton__text">
                ◀︎&ensp;TOP
            </a>
        </div>
    )
};
