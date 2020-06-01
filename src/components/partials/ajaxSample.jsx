import React from "react";
import Axios from "axios";

// import "./styles/ajaxSample.scss";

export default class AjaxSample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        const url = "http://httpbin.org/json";

        Axios.get(url)
            .then(response => {
                console.log(response.data);
                this.setState({
                    isLoaded: true,
                    items: response.data.slideshow.slides
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        const heading = "AjaxSampleコンポーネント";

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <>
                    <h2 className="module__heading module__heading">{heading}</h2>
                    <div className="module__body">
                        Loading...
                    </div>
                </>
            );
        } else {

            let slidesList = [];

            items.forEach(slide => {

                let slideItems = [];

                if(slide.items) {
                    console.log(slide);
                    slide.items.forEach(item => {
                        console.log(item);
                        slideItems.push(
                            <li className="module__listItem" >
                                {item}
                            </li>
                        );
                    });
                }

                slidesList.push(
                    <li className="module__listItem">
                        「{slide.title}」
                        <ol>
                            {slideItems}
                        </ol>
                    </li>
                );
            });

            return (
                <>
                    <h2 className="module__heading module__heading">{heading}</h2>
                    <div className="module__body">
                        このコンポーネントでは<a href={"http://httpbin.org/"}>httpbin.org</a>から<span className="strong">Ajax</span>でJSONデータを取得し、クライアントサイドでレンダリングしています。
                        <br/>
                        ※jsonの中身に「&lt;em&gt;」タグが入っているので、そのままエスケープして表示しています。
                        <ul className="module__list">
                            {slidesList}
                        </ul>
                    </div>
                </>
            );
        }
    }
}
