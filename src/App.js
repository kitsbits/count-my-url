import React from "react";
import Input from "./Input";
import Chart from "./Chart";
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
        this.getSocialShares(this.state.url);
    }

    pieChart(data) {
        const width = 360;
        const height = 360;
        const radius = 180;
        const color = d3.scaleOrdinal(d3.schemeCategory20b);
        const svg = d3.select('#chart')
              .append('svg')
              .attr('width', width)
              .attr('height', height)
              .append('g')
              .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');
        const arc = d3.arc()
              .innerRadius(0)
              .outerRadius(radius);
        const pie = d3.pie()
                .value(function(d) { return d.count; })
                .sort(null);
        const path = svg.selectAll('path')
                  .data(pie(data))
                  .enter()
                  .append('path')
                  .attr('d', arc)
                  .attr('fill', function(d) {
                    return color(d.data.label);
                  });

    }

    configThis(data) {
        const dataset = [];
        for (let key in data) {
            dataset.push({label: key, count: data[key]});
        }
        return dataset;
    }

    getSocialShares(url) {
        axios
        .get(`https://free.donreach.com/shares?providers=facebook,google,twitter&url=${url}`, {
            headers: {
                Authorization: "949e1f1aaf2245656fbda132ee2552cb"
            }
        })
        .then(response => {
            const data = this.configThis(response.data.shares);
            this.setState(prevState => {
                return {
                    ...prevState,
                    dataReady: true
                }
            })
            this.pieChart(data);
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {

    }

    render() {
        const pageStyles = {
            height: "100vh",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
        }

        return (
            <div style={pageStyles}>
            <Input
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                input={this.state}/>
            <div id="chart">
                {this.state.dataReady ? this.getSocialShares(d3) : <Chart/> }
            </div>
            </div>
        )
    }
}
