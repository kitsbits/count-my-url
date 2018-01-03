import React from "react";

export default function ChartInfo(props) {
    const listStyles = {
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "200px",
    }

    return (
        <div>
            <h1>Site: {props.info.rawDataset.url}</h1>
            <ul style={listStyles}>
                <li>Total Shares: {props.addCommasToTotal(props.info.rawDataset.total)}</li>
                {props.renderShareData(props.info.dataset)}
            </ul>
        </div>
    )
}
