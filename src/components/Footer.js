import React from "react";

export default function Footer(props) {
    const containerStyles = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        width: "90%",
        backgroundColor: "#e3e3e3",
        borderTop: "1px solid #D3D3D3",
        padding: "0 2%",
        margin: "auto",
    }

    const linkStyles = {
        textDecoration: "none",
        fontSize: "1em",
        margin: "25px 5px",
        paddingBottom: "5px",
        borderBottom: "2px solid rgba(244,156,67,0.9)",
    }

    const donReachStyles = {
        textDecoration: "none",
        fontSize: "0.75em",
        fontStyle: "italic",
        margin: "25px 25px",
    }

    return (
        <div style={containerStyles}>
            {/* <h4>COUNT MY URL</h4> */}
            <a href="https://github.com/noblepaper/count-my-url" target="blank" style={linkStyles} className="links">CODE FOR THIS SITE</a>
            <a href="https://github.com/noblepaper" target="blank" style={linkStyles} className="links">MY GITHUB</a>
            <a href="https://donreach.com/docs/social-api/getting-started/" target="blank" style={donReachStyles} className="links">* Data supplied by<br/>the Don Reach API</a>
        </div>
    )
}
