import React from "react";

export default function ChartInfo(props) {
    const containerStyles = {
        backgroundColor: "rgba(255,255,255,0.85)",
        padding: "45px",
        borderRadius: "2px",
        boxShadow: "2px 2px 8px rgb(192,192,192)",
    }
    const listStyles = {
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "200px",
    }

    return (
        <div style={containerStyles}>
            <h1>{props.info.rawDataset.url}</h1>
            <ul style={listStyles}>
                <li>Total Shares: {props.addCommasToTotal(props.info.rawDataset.total)}</li>
                {props.renderShareData(props.info.dataset)}
            </ul>
        </div>
    )
}
