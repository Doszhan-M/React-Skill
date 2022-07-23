import React, { useState, useEffect } from "react";
import "../styles/css/main.min.css";
import axios from "axios"

import backgroundVideo from "../img/neon.mp4";
import backgroundPoster from "../img/neon.png";

function Main() {

    let [latitude, setPosition] = useState(null);

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            console.log(lat)
            setPosition(lat)
        })
    }
    useEffect(() => handleClick(), [])

    return (
        <main>
            <video autoPlay muted loop preload="auto" poster={backgroundPoster} className="preview__video">
                <source type="video/mp4" src={backgroundVideo} />
            </video>

            <p>Click the button to get your coordinates.</p>
            <p id="demo">Latitude: {latitude}</p>
        </main>
    )
}

export default Main;