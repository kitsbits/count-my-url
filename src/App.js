import React from "react";
import Input from "./Input";
import Chart from "./Chart";
import BlankChart from "./BlankChart";
import ChartInfo from "./ChartInfo";
import axios from "axios";
import * as d3 from "d3";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            url: "",
            dataReady: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // update this.state.url with user input
        event.persist();
        const name = event.target.name;
        const newValue = event.target.value;
        this.setState(prevState => {
            return ({
                ...prevState,
                [name]: newValue
            });
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getSocialShares(this.state.url); // get social shares using url provided by user input
    }

    _configThis(data) {
        // configure data returned from donreach to be d3 pie chart friendly
        const dataset = [];
        for (let key in data) {
            dataset.push({label: key, count: data[key], display: this._addCommasToThis(data[key])});
        }
        return dataset;
    }

    _addCommasToThis(number) {
        const returnThis = number.toString().split("");
        for (let i = returnThis.length; i > 3; i -= 3) {
            returnThis.splice(i-3, 0, ",");
        }
        return returnThis.join("");
    }

    renderPieChart(data) {
        // called in Chart component when this.state.dataReady
        const width = 360;
        const height = 360;
        const radius = 180;
        const color = d3.scaleOrdinal(d3.schemeCategory20b);
        d3.select("svg").remove();
        const svg = d3.select("#chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + (width / 2) +  "," + (height / 2) + ")");
        const arc = d3.arc()
              .innerRadius(0)
              .outerRadius(radius);

        const pie = d3.pie()
                .value(function(d) { return d.count; })
                .sort(null);
        const path = svg.selectAll("path")
            .data(pie(data))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", function(d) {
              return color(d.data.label);
            });
        // const text = svg.selectAll("text")
        //     .data(data)
        //     .enter()
        //     .append("text")
        //     .text((d) => d.label)
        //     // .attr("x", 10)
        //     // .attr("y", 10)
        //     .attr("text-anchor", "middle")
        //     .style("fill", "white")
        //     .attr("transform", "rotate(70)")
        //     // .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
    }

    renderShareData(data) {
        return data.map((each, i) => {
            return (
                <li key={each.label + i}>{each.label}: {each.display} Shares</li>
            )
        })
    }

    getSocialShares(url) {
        axios
        .get(`https://free.donreach.com/shares?providers=facebook,google,twitter,linkedin,pinterest,tumblr&url=${url}`, {
            headers: {
                Authorization: "949e1f1aaf2245656fbda132ee2552cb"
            }
        })
        .then(response => {
            const data = this._configThis(response.data.shares);
            // call function to figure donreach share data to be d3 pie chart friendly
            this.setState(prevState => {
                // set configured data in state, tell component data is ready
                return {
                    ...prevState,
                    dataReady: true, // triggers this.renderPieChart in Chart component
                    rawDataset: response.data,
                    dataset: data
                }
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        const pageStyles = {
            height: "100vh",
        }

        const infoContainer = {
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            backgroundColor: "#d3d3d3",
            padding: "75px",
        }

        const chartContainer = {
            minHeight:"500px",
        }

        console.log(this.state);

        return (
            <div style={pageStyles}>
                <Input
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    input={this.state}/>
                <div style={infoContainer}>
                    <div id="chart" style={chartContainer}>
                        {this.state.dataReady ?
                            <Chart
                                renderChart={this.renderPieChart}
                                dataset={this.state.dataset}/>
                            :
                            <BlankChart/> }
                    </div>
                    <div>
                        {this.state.dataReady ?
                            <ChartInfo
                                info={this.state}
                                renderShareData={this.renderShareData}
                                addCommasToTotal={this._addCommasToThis}/>
                            :
                            null}
                    </div>
                </div>
            </div>
        )
    }
}
