import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import Chart from "./Chart";
import ChartInfo from "./ChartInfo";
import axios from "axios";
import * as d3 from "d3";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            url: "",
            dataReady: false,
            colorRange: ["rgba(61,22,92,0.9)", "rgba(176,158,190,0.9)", "rgba(123,71,174,0.9)", "rgba(187,115,119,0.9)", "rgba(158,43,145,0.9)"]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderPieChart = this.renderPieChart.bind(this);
        this.renderShareData = this.renderShareData.bind(this);
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
        // get social shares using url provided by user input
        event.preventDefault();
        this.getSocialShares(this.state.url);
    }

    _configThis(shareData, totalShares) {
        // configure data returned from donreach to be d3 pie chart friendly
        const dataset = [];
        for (let key in shareData) {
            dataset.push({
                label: key,
                count: shareData[key],
                display: this._addCommasToThis(shareData[key]),
                percent: Math.floor((shareData[key] / totalShares) * 100)
            });
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

    _truncateThis(url) {
        if (url.length < 41) {
            return url;
        }
        let grab38Chars = url.split("").slice(0, 38).join("");
        return grab38Chars += "...";
    }

    renderPieChart(data) {
        // called in Chart component when this.state.dataReady
        const width = 650;
        const height = 500;
        const radius = 180;
        const color = d3.scaleOrdinal().range(this.state.colorRange);

        // to show only one pie chart at a time
        d3.select("svg").remove();

        const svg = d3.select("#chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + (width / 2) +  "," + (radius + 50) + ")");

        // pie arc
        const arc = d3.arc()
              .innerRadius(0)
              .outerRadius(radius);
        // arc for labels
        const labelArc = d3.arc()
              .innerRadius(radius - 40)
              .outerRadius(radius - 40);

        const pie = d3.pie()
                .value(function(d) { return d.percent; })
                .sort(null);

        const path = svg.selectAll("path")
            .data(pie(data))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", function(d) {
              return color(d.data.label);
            });

        const text = svg.selectAll("text")
            .data(pie(data), function(d){ return d.data.label });

        text.enter()
            .append("text")
            .attr("transform", function(d) {
                var c = labelArc.centroid(d);
                return "translate(" + c[0]*1.5 +"," + c[1]*1.5 + ")";
             })
            .text(function(d) {
                if (d.data.percent > 0.4) {
                    return (`${d.data.label}: ${d.data.percent}%`);
                }
            })
            .style("fill", "#4F4757");
    }

    renderShareData(data) {
        // rendered in ChartInfo component, list item for each social platform
        const shareCountStyles = {
            color: "rgba(244,156,67,0.9)",
            fontSize: "1.5em",
            marginLeft: "10px",
        }

        const listItemStyles = {
            marginBottom: "15px",
        }

        return data.map((each, i) => {
            return (
                <li key={each.label + i}
                    color={this.state.colorRange[i]}
                    style={listItemStyles}>{each.label.toUpperCase()}<span style={shareCountStyles}>{each.display}</span><br/>shares</li>
            )
        })
    }

    getSocialShares(url) {
        // called in this.handleSubmit
        axios
        .get(`https://free.donreach.com/shares?providers=facebook,twitter,linkedin,pinterest,tumblr&url=${url}`, {
            headers: {
                Authorization: "949e1f1aaf2245656fbda132ee2552cb"
            }
        })
        .then(response => {
            const data = this._configThis(response.data.shares, response.data.total);
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

        }

        const infoContainer = {
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "80%",
            padding: "105px 0 35px 0",
            margin: "0 auto 200px auto",
        }

        const chartContainer = {

        }

        // console.log(this.state);

        return (
            <div style={pageStyles}>
                <Header/>
                <Input
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    input={this.state}/>
                <div style={infoContainer}>
                    <div id="chart" style={chartContainer}>
                        <Chart
                            renderChart={this.renderPieChart}
                            state={this.state}/>
                    </div>
                    <div>
                        <ChartInfo
                            info={this.state}
                            renderShareData={this.renderShareData}
                            addCommasToTotal={this._addCommasToThis}
                            truncateUrl={this._truncateThis}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
