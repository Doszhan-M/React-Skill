import React, { Component } from "react";
import "../styles/Main.css";
import axios from "axios"

import Countries from "./Countries"


function Main() {
    return (
        <main>
            <Countries />
        </main>
    )
}


export default Main;