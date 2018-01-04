import React from "react";
import * as d3 from "d3";

export default function Chart(props) {
    return (
        <div style={{overflow: "visible"}}>
            {props.renderChart(props.dataset)}
        </div>
    )
}
