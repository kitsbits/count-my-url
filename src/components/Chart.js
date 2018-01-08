import React from "react";
import * as d3 from "d3";

export default function Chart(props) {
    // pie chart styles in App.js (renderPieChart) \\
    /////////////////////////////////////////////////

    const placeholderViewbox = {
        height: "400px",
        width: "500px",
        display: "flex",
        justifyContent: "center",
    }

    const placeholderChartStyles = {
        height: "360px",
        width: "360px",
        borderRadius: "100%",
        backgroundColor: "rgba(244,156,67,0.9)",
    }

    return (
        props.state.dataReady ?
        (<div>
            {props.renderChart(props.state.dataset)}
        </div>)
        :
        (<div style={placeholderViewbox}>
            <div style={placeholderChartStyles}></div>
        </div>)

    )
}
