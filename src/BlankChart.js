import React from "react";

export default function BlankChart(props) {
    const placeholderChartStyles = {
        height: "360px",
        width: "360px",
        borderRadius: "100%",
        backgroundColor: "grey",
    }

    return (
        <div style={placeholderChartStyles}></div>
    )
}
