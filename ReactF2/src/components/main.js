import React, { useState, useEffect } from "react";
import "../styles/css/main.min.css";
import axios from "axios"
import Geo from "./geo"

import backgroundVideo from "../img/neon.mp4";
import backgroundPoster from "../img/neon.png";

function Main() {


    return (
        <main>
            <video autoPlay muted loop preload="auto" poster={backgroundPoster} className="preview__video">
                <source type="video/mp4" src={backgroundVideo} />
            </video>
            <Geo />
        </main>
    )
}

export default Main;