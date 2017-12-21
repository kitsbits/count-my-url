import React from "react";
import Input from "./Input";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};

        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event) {
    //     event.persist();
    //     const name = event.target.name;
    //     const newValue = event.target.value;
    //     this.setState(prevState => {
    //         return({
    //             ...prevState,
    //             [name]: newValue
    //         });
    //     });
    // }

    render() {
        const pageStyles = {
            height: "100vh",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
        }

        return (
            <div style={pageStyles}>
                <Input/>
            </div>
        )
    }
}
