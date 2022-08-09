import React from "react";
import { NavLink } from "react-router-dom"
import "../styles/css/header.min.css";


function Header() {

    return (

        <header>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/api">Api</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </header>
    );
}

export default Header;