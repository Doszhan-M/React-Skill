import React, { useState } from "react";
import 'react-bootstrap-accordion/dist/index.css'
import "../styles/css/day.min.css";
import "../styles/css/current.min.css";

import WeatherSvg from "./weather_svg"
import { Accordion } from 'react-bootstrap-accordion'


function Day(props) {

    let sky = props.day.weather[0].description

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let unix_timestamp = props.day.dt
    let forecastTime = new Date(unix_timestamp * 1000);
    let weekday = weekdays[forecastTime.getDay()];

    let hour = forecastTime.getHours()
    let iconId = props.day.weather[0].id

    let day_temp = props.day.temp.day
    let night_temp = props.day.temp.night


    let rain = props.day.pop * 100
    let humidity = props.day.humidity
    let wind_speed = props.day.wind_speed
    let sunrise = props.day.sunrise
    let sunriseHour = new Date(sunrise * 1000).getHours();
    let sunriseMinute = new Date(sunrise * 1000).getMinutes();
    let pressure = props.day.pressure
    let dew_point = props.day.dew_point
    let uvi = props.day.uvi
    let sunset = props.day.sunset
    let sunsetHour = new Date(sunset * 1000).getHours();
    let sunsetMinute = new Date(sunset * 1000).getMinutes();

    return (
        <Accordion title=<div className="day_title">
            <div className="title_left">
                <WeatherSvg {...{ iconId, hour} }/>
                <div className="week_day">{weekday}</div>
            </div>
            <div className="title_right"><i>{sky}</i>{day_temp}°C / {night_temp}°C</div>
        </div> >
        <div className="specification">
            <div className="spec_card">
                <div className="card_left">
                    <p className="spec_key"><span>Rain</span><span>{rain} %</span></p>
                    <p className="spec_key"><span>Humidity</span><span>{humidity} %</span></p>
                    <p className="spec_key"><span>Wind speed</span><span>{wind_speed} m/s</span></p>
                    <p className="spec_key"><span>Sunrise</span><span>{sunriseHour}:{sunriseMinute}</span></p>
                </div>
                <div className="card_right">
                    <p className="spec_key"><span>Pressure</span><span>{pressure} hPa</span></p>
                    <p className="spec_key"><span>Dew point</span><span>{dew_point} °C</span></p>
                    <p className="spec_key"><span>UV index</span><span>{uvi}</span></p>
                    <p className="spec_key"><span>Sunset</span><span>{sunsetHour}:{sunsetMinute}</span></p>
                </div>
            </div>
        </div>
        </Accordion >
    )
}

export default Day;