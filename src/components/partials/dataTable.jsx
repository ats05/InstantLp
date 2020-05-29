import React from "react";
import "./styles/dataTable.scss";


/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export default function DataTable(props) {
    let elements = [];
    props.data.forEach(element => (
        elements.push(
            <div className="dataTable__row">
                <div className="dataTable__term">{element.term}</div>
                <div className="dataTable__description" dangerouslySetInnerHTML={{ __html: element.description }}/>
            </div>
        )
    ));

    return (
        <>
            <div className="dataTable__table">
                {elements}
            </div>
        </>
    );
}
