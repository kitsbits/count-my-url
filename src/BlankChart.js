import React from "react";

export default function BlankChart(props) {
    const containerStyles = {
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        maxWidth: "1100px",
        justifyContent: "space-around",
    }

    const placeholderChartStyles = {
        height: "360px",
        width: "360px",
        borderRadius: "100%",
        backgroundColor: "rgba(244,156,67,0.9)",
    }

    const placeholderInfoStyles = {
        // backgroundColor: "rgba(255,255,255,0.85)",
        // padding: "45px",
        // borderRadius: "2px",
        margin: "20px",
        textAlign: "center",
    }

    return (
        <div style={containerStyles}>
            <div style={placeholderChartStyles}></div>
            <div style={placeholderInfoStyles}>
                <h1>Your Site</h1>
                <p>Total Shares --</p>
            </div>
        </div>
    )
}
