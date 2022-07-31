import React, { useState } from "react";
import "../styles/css/main.min.css";

import Geo from "./geo"
import Current from "./current"
import Hourly from "./hourly"
import Daily from "./daily"


function Main() {

    const apiToken = '44ec7f65d72da5c7ef0b4a57c7087894'
    let [latitude, setLatitude] = useState(null)
    let [longitude, setLongitude] = useState(null)
    let [weatherForecast, setWeatherForecast] = useState(null)
    let [currentIndex, setCurrentIndex] = useState(0)
    let [indexTime, setIndexTime] = useState([])
    let [isDark, setDark] = useState(true)



    return (
        <main>



            <div className="box">
                <Geo {...{ apiToken, latitude, setLatitude, longitude, setLongitude, currentIndex, indexTime, setDark }} />
                <Current {...{ apiToken, latitude, longitude, setWeatherForecast, currentIndex, setIndexTime, isDark }} />
                <Hourly {...{ weatherForecast, setCurrentIndex, isDark }} />
                <Daily {...{ weatherForecast, isDark, latitude, longitude }} />
            </div>
        </main>
    )
}
export default Main;