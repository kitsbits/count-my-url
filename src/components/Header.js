import React from "react";

export default function Header(props) {
    const containerStyles = {
        height: "55px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 5%",
        backgroundColor: "rgba(255,255,255,0.71)",
        boxShadow: "2px 2px 8px rgb(192,192,192)",
    }

    const titleStyles = {
        margin: "0",
    }

    const iconStyles = {
        color: "#4F4757",
    }

    return (
        <div style={containerStyles}>
            <h3 style={titleStyles}>COUNT MY URL</h3>
            <a href="https://github.com/noblepaper/count-my-url" target="blank"><i className="fa fa-2x fa-github links" style={iconStyles}/></a>
        </div>
    )
}
