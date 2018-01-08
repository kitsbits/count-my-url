import React from "react";
// import glamorous from "glamorous";

export default function Input(props) {
    const formStyle = {
        height: "250px",
        width: "100%",
        margin: "auto",
        opacity: "0.85",
        backgroundImage: "linear-gradient(-90deg, #FF8300 0%, #4E069E 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        boxShadow: "2px 2px 8px rgb(192,192,192)",
        paddingBottom: "45px",
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

    const descriptionStyles = {
        color: "rgba(255,255,255,0.85)",
        marginBottom: "30px",
        textAlign: "center",
        width: "80%",
    };

    const buttonStyles = {
        alignSelf: "flex-end",
        marginRight: "18%",
        marginTop: "25px",
        height: "35px",
        width: "200px",
        borderRadius: "70px",
        backgroundColor: "transparent",
        color: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(255,255,255,0.85)",
        outline: "none",
        fontSize: "1em",
    };

    return (
        <form onSubmit={props.handleSubmit} style={formStyle}>
            <p style={descriptionStyles}>Counts # of shares on Facebook, Twitter, LinkedIn, Tumblr, & Pinterest*</p>
            <input onChange={props.handleChange} type="text" name="url" placeholder="Paste a URL" value={props.input.url} style={inputStyles} />
        <button type="submit" style={buttonStyles}>GET RESULTS</button>
        </form>
    )
}
