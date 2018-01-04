import React from "react";

export default function ChartInfo(props) {
    const containerStyles = {
        // backgroundColor: "rgba(255,255,255,0.85)",
        // padding: "45px",
        // borderRadius: "2px",
        maxWidth: "320px",
        margin: "20px",
    }
    const listStyles = {
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "0",
        height: "200px",
    }

    const headerStyles = {
        width: "100%",
        wordWrap:" break-word",
        fontSize: "1.65em",
        margin: "0",
        padding: "25px 0 5px 0",
        borderTop: "1px solid"
    }

    const shareCountStyles = {
        color: "rgba(244,156,67,0.9)",
        fontSize: "1.5em",
    }

    return (
        <div style={containerStyles}>
            <p>TOTAL
                <span style={shareCountStyles}>    {props.addCommasToTotal(props.info.rawDataset.total)}</span><br/> shares
            </p>
            <h1 style={headerStyles}>{props.info.rawDataset.url}</h1>
            <ul style={listStyles}>
                {props.renderShareData(props.info.dataset)}
            </ul>
        </div>
    )
}
