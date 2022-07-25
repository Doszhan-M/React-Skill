import React, { useState, useEffect } from "react";
import axios from "axios"
import "../styles/css/current.min.css";

import clearDay from '../img/svg/clear-day.svg';


function Current(props) {
    let [temperature, setTemperature] = useState(null)
    let [feelsLike, setFeelsLike] = useState(null)
    let [sky, setSky] = useState(null)

    useEffect(
        () => {
            if (props.latitude || props.longitude) {
                let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${props.apiToken}&units=metric&exclude=minutely`
                axios.get(url).then(response => {
                    let temp = String(response.data['current']['temp'])
                    setTemperature(temp.substring(0, 4))
                    setFeelsLike(response.data['current']['feels_like'])
                    setSky(response.data['current']['weather'][0]['description'])
                });
            }

        },
        [props.latitude, props.longitude],
    );

    return (
        <div className="current_weather">
            <div className="left_block">
                <div className="weather_svg">
                    <img src={clearDay} alt="sky_svg" />
                </div>
                <div className="temperature">
                    <p className="temp">{temperature}°C</p>
                    <p className="feel_like">Feels like: {feelsLike}°</p>
                    <p className="sky">{sky}</p>
                </div>
            </div>
            <div className="right_block">
                <div className="specification">
                    <div className="spec_card">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Current;