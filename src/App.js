import React from "react";
import Input from "./Input";
import axios from "axios";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            url: "",
            shareData: {}
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
                    shareData: data
                }
            })
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        // this.getSocialShares();
    }

    render() {
        const pageStyles = {
            height: "100vh",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
        }
        console.log(this.state);

        return (<div style={pageStyles}>
            <Input
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                input={this.state}/>
        </div>)
    }
}
