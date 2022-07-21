import React, { Component } from "react";
import "../styles/app.css";

import Header from "./header"
import Main from "./main"


function App() {
    return (
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>

    );
}

export default App;