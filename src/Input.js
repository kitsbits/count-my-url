import React from "react";
// import glamorous from "glamorous";

export default function Input(props) {
    const formStyle = {
        height: "200px",
        width: "100%",
        margin: "auto",
        opacity: "0.85",
        backgroundImage: "linear-gradient(-90deg, #FF8300 0%, #4E069E 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "2px 2px 8px rgb(192,192,192)",
    };

    const inputStyles = {
        height: "55px",
        width: "65%",
        borderRadius: "110px",
        outline: "none",
        border: "1px solid white",
        paddingLeft: "35px",
        color: "#3D165C",
        fontSize: "1.25em",
        fontFamily: "'Barlow', sans-serif",
        opacity: "0.76",
        background: "#FFFFFF",
    };

    return (
        <form onSubmit={props.handleSubmit} style={formStyle}>
            <input onChange={props.handleChange} type="text" name="url" placeholder="Paste a URL" value={props.input.url} style={inputStyles} />
        </form>
    )
}
