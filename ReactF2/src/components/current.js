import React, { useState, useEffect } from "react";
import axios from "axios"
import "../styles/css/current.min.css";

import WeatherSvg from "./weather_svg"


function Current(props) {

    let [forecastData, setForecastData] = useState(null)
    let [temperature, setTemperature] = useState(null)
    let [feelsLike, setFeelsLike] = useState(null)
    let [sky, setSky] = useState(null)
    let [rain, setRain] = useState(null)
    let [wind_speed, setWindSpeed] = useState(null)
    let [wind_deg, setWindDeg] = useState(null)
    let [pressure, setPressure] = useState(null)
    let [dew_point, setDewPoint] = useState(null)
    let [uvi, setUvi] = useState(null)
    let [iconId, setIconId] = useState(null)
    let [hour, setHour] = useState(null)


    function collectData(response, index) {
        if (response) {
            setForecastData(response)
            props.setWeatherForecast(response.data)
            let temp = String(response.data.hourly[index]['temp'])
            setTemperature(temp.substring(0, 4))
            setFeelsLike((response.data.hourly[index]['feels_like']).toFixed(1))
            setSky(response.data.hourly[index]['weather'][0]['description'])
            setRain((response.data.hourly[index]['pop'] * 100).toFixed(0))
            setWindSpeed((response.data.hourly[index]['wind_speed'].toFixed(0)))
            setWindDeg(response.data.hourly[index]['wind_deg'])
            setPressure(response.data.hourly[index]['pressure'])
            setDewPoint((response.data.hourly[index]['dew_point'].toFixed(1)))
            setUvi((response.data.hourly[index]['uvi'].toFixed(1)))
            setIconId(response.data.hourly[index]['weather'][0]['id'])

            let unix_timestamp = response.data.hourly[index]['dt']
            let forecastTime = new Date(unix_timestamp * 1000);
            hour = forecastTime.getHours()
            setHour(hour);

            let date = forecastTime.toString()
            let to = date.search('GMT');
            let timeline = date.substring(0, to - 4);   
            props.setIndexTime(timeline)
        }
    }

    useEffect(
        () => {
            if (props.latitude || props.longitude) {
                let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${props.apiToken}&units=metric&exclude=minutely`
                axios.get(url).then(response => {
                    collectData(response, props.currentIndex)
                });
            }
        },
        [props.latitude, props.longitude],
    );

    useEffect(
        () => {
            collectData(forecastData, props.currentIndex)
        },
        [props.currentIndex],
    );
    return (
        <div className="current_weather">
            <div className="left_block">
                <div className="weather_svg">
                    <WeatherSvg {...{ iconId, hour }} />
                </div>
                <div className="temperature">
                    <p className="temp">{temperature}°C</p>
                    <p className="feel_like">Feels like: {feelsLike}°</p>
                    <p className="sky">{sky}</p>
                </div>
            </div>
            <div className="right_block">
                <div className="specification">
                    <div className="spec_card" style={props.isDark ? {} : {background: "linear-gradient(45deg, #b1f4cf, #b1f4cf)"}}>
                        <div className="card_left">
                            <p className="spec_key"><span>Rain</span><span>{rain} %</span></p>
                            <p className="spec_key"><span>Wind speed</span><span>{wind_speed} m/s</span></p>
                            <p className="spec_key"><span>Wind degree</span><span>{wind_deg} °</span></p>
                        </div>
                        <div className="card_right">
                            <p className="spec_key"><span>Pressure</span><span>{pressure} hPa</span></p>
                            <p className="spec_key"><span>Dew point</span><span>{dew_point} °C</span></p>
                            <p className="spec_key"><span>UV index</span><span>{uvi}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Current;