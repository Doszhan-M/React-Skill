import React, { useState } from "react";
import "../styles/css/hour.min.css";

import WeatherSvg from "./weather_svg"



function Hour(props) {

    let hour = null
    let temp = null
    let iconId = null
    let forecastTime = null
    let index = props.index

    if (props.hour) {
        temp = String(props.hour.temp).substring(0, 4)
        iconId = props.hour.weather[0].id
        let unix_timestamp = props.hour.dt
        forecastTime = new Date(unix_timestamp * 1000);
        hour = forecastTime.getHours()
    }

    return (
        <div className="hourly_item" data-index={index} onClick={props.onClick}>
            <p className="hour">{hour}:00</p>
            <WeatherSvg {...{ iconId, hour} }/>
            <p className="temp">{temp}°C</p>
        </div>
    )
}

export default Hour;