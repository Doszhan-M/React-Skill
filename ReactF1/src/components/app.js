import React, { Component } from "react";
import "../styles/app.css";

import Header from "./Header"
import Main from "./Main"


function App() {
    const buttonName = "buttonHeader";

    return (
        <React.Fragment>
            <Header buttonName={buttonName} />
            <Main />
        </React.Fragment>

    );
}

export default App;