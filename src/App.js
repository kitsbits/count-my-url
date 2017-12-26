import React from "react";
import Input from "./Input";
import axios from "axios";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            url: "",
            socialShareData: {}
        };

        this.handleChange = this.handleChange.bind(this);
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

    getSocialShares() {
        axios
        .get("https://free.donreach.com/shares?providers=facebook,google,twitter&url=http://9gag.com/", {
            headers: {
                Authorization: "949e1f1aaf2245656fbda132ee2552cb"
            }
        })
        .then(response => {
            // this.setState(prevState => {
            //     return {
            //         ...prevState,
            //         socialShareData: response.data
            //     }
            // })
            console.log(response.data);
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getSocialShares();
    }

    render() {
        const pageStyles = {
            height: "100vh",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
        }
        // console.log(this.state);

        return (<div style={pageStyles}>
            <Input handleChange={this.handleChange} input={this.state}/>
        </div>)
    }
}
