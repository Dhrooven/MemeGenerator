import React from "react";
import logo from "../images/TrollFace.png";
import "../index.css";

export  default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="troll face" className="navbar--img"/>
            <h2 className="navbar--header">Meme Generator</h2>
            <h4 className="navbar--title">React-Course Project-3</h4>

        </div>
    )
}