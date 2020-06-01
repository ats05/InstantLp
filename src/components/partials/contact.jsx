import React from "react";
import "./styles/contact.scss";

export default function Contact() {
    return (
        <>
            <div className="contact__body contact__message">
                一番単純なコンポーネントの例です。
            </div>
            <div className="contact__body contact__message">
                これを各ページに入れるという場合には、コンポーネントにしたほうが良いかもしれませんが、不必要に増やす必要もありません。
            </div>
            <div className="contact__link">
                <a className="contact__linkText"
                   href="mailto:ats05@aol.jp?body=このあたりも、htmlだけで作れます。%0d%0a%0d%0a%0d%0a改行を入れたい場合は、こんな感じで。"><span
                    className="contact__iconWrapper"><img className="contact__icon" src="./images/email.svg" alt="メールアイコン"/></span>ats05@aol.jp（メーラーが起動します）</a>
            </div>
            <div className="contact__link">
                <a className="contact__linkText" href="tel:000-0000-0000"><span className="contact__iconWrapper"><img className="contact__icon" src="./images/phone.svg" alt="電話アイコン"/></span>000-0000-0000（かけないでね）</a>
            </div>
            <div className="contact__body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum, ex exercitationem fuga ipsa mollitia officiis optio placeat quasi quisquam, repellat rerum voluptas voluptate. Consectetur debitis minima nulla quibusdam voluptatibus.
            </div>
            <div className="contact__body contact__caption">
                ※Lorem ipsum dolor sit amet.
            </div>
        </>
    );
}



