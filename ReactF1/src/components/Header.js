import React, { Component, useState } from "react";
import "../styles/Header.css"
import Button from "react-bootstrap/Button";


function Header(props) {

    let[count, increaseCount] = useState(0);

    const handleClick = () => {
        increaseCount(count + 1)
    }
    return (
        <header>
            <h1>This is header</h1>
            <Button className={ props.buttonName } onClick={ handleClick }>{ props.buttonName } clicked {count} times</Button>
        </header>
    )
}

export default Header;