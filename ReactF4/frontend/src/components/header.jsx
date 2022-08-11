import React from "react";
import { NavLink } from "react-router-dom"
import "../styles/css/header.min.css";


function Header() {

    return (

        <header>
            <div>
                <NavLink to="/">Home</NavLink>
                <a href="http://34.136.172.168:4000/swagger/" target="_blank">API</a>
                <NavLink to="/about">About</NavLink>
            </div>
        </header>
    );
}

export default Header;