import React from "react";
// import glamorous from "glamorous";

export default function Input(props) {
    const formStyle = {
        height: "400px",
        width: "100%",
        margin: "auto",
        backgroundColor: "#045B75",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "2px 2px 8px rgb(192,192,192)",
    };

    const inputStyles = {
        height: "55px",
        width: "75%",
        borderRadius: "100px",
        outline: "none",
        border: "1px solid white",
        paddingLeft: "35px",
        color: "orange",
        fontSize: "1em",
        "fontFamily": "'Barlow', sans-serif",
        backgroundColor: "rgba(113,207,255,0.36)"
    };

    return (
        <form onSubmit={props.handleSubmit} style={formStyle}>
            <input onChange={props.handleChange} type="text" name="url" placeholder="Paste a URL" value={props.input.url} style={inputStyles} />
        </form>
    )
}
