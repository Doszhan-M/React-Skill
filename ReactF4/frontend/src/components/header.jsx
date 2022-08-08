import React from "react";
import { NavLink } from "react-router-dom"

function Header() {

    return (

        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </header>
    );
}

export default Header;