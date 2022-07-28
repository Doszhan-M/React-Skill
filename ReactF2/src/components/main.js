import React, { useState } from "react";
import "../styles/css/main.min.css";

import Geo from "./geo"
import Current from "./current"
import Hourly from "./hourly"
import Daily from "./daily"

import backgroundVideo from "../img/neon.mp4";
import backgroundPoster from "../img/neon.png";


function Main() {

    const apiToken = 'ab175a054c6d3bf1f1ae8fb08204d3ff'
    // const apiToken = '44ec7f65d72da5c7ef0b4a57c7087894'
    // const apiToken = '257535a37eaa7f5c0f96a570ca534f58'

    let [latitude, setLatitude] = useState(null)
    let [longitude, setLongitude] = useState(null)
    let [weatherForecast, setWeatherForecast] = useState(null)
    let [currentIndex, setCurrentIndex] = useState(0)

    return (
        <main>
            <video autoPlay muted loop preload="auto" poster={backgroundPoster} className="preview__video">
                <source type="video/mp4" src={backgroundVideo} />
            </video>
            <div className="box">
                <Geo {...{ apiToken, latitude, setLatitude, longitude, setLongitude }} />
                <Current {...{ apiToken, latitude, longitude, setWeatherForecast, currentIndex }} />
                <Hourly {...{ weatherForecast, setCurrentIndex }}/>
                <Daily {...{ weatherForecast }}/>
            </div>

        </main>
    )
}

export default Main;