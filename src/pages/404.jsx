import React from "react";
import "../style/index.scss";
import Head from "../components/metas/head";
import Footer from "../components/partials/footer";
import BackgroundImage from "../components/partials/fixedBackgroundImage";
import BackButton from "../components/partials/backButton"


export default () => {

    return (
        <>
            <Head pageTitle={"INSTANT-LP"} subTitle={"Page Not Found"}/>
            <div className="content">
                <BackgroundImage/>
                <section>
                    <main className="body__main">
                        <div className="body__contents news__area">
                            Sorry, Page not found.
                        </div>
                    </main>
                </section>
                <BackButton />
            </div>
            <Footer/>
        </>
    )
}