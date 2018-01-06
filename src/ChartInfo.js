import React from "react";

export default function ChartInfo(props) {
    // styles for social platform list items in App.js (renderShareData)
    ////////////////////////////////////////////////////////////////////

    const containerStyles = {
        maxWidth: "320px",
        margin: "30px",
    }

    // placeholder styles
    const placeholderInfoStyles = {
        backgroundColor: "rgba(255,255,255,0.85)",
        padding: "45px",
        borderRadius: "2px",
        boxShadow: "2px 2px 8px rgb(192,192,192)",
    }
    /////////////////////////////

    // styles for actual data
    const listStyles = {
        listStyle: "none",
        padding: "0",
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
        marginLeft: "15px",
    }

    return (
        <div style={containerStyles}>
            <p>TOTAL
                <span style={shareCountStyles}>
                    {props.info.dataReady ?
                    props.addCommasToTotal(props.info.rawDataset.total)
                    :
                    "0"}
                </span>
                <br/> shares
            </p>
            {props.info.dataReady ?
            (<div>
                <h1 style={headerStyles}>{props.truncateUrl(props.info.rawDataset.url)}</h1>
                <ul style={listStyles}>
                    {props.renderShareData(props.info.dataset)}
                </ul>
            </div>)
            :
            (<h1 style={headerStyles}>http://yourwebsite.com</h1>)}
        </div>
    )
}
