import React, { useState, useEffect } from "react";
import axios from "axios"
import "../styles/css/current.min.css";

import WeatherSvg from "./weather_svg"


function Current(props) {
    let [temperature, setTemperature] = useState(null)
    let [feelsLike, setFeelsLike] = useState(null)
    let [sky, setSky] = useState(null)
    let [humidity, setHumidity] = useState(null)
    let [wind_speed, setWindSpeed] = useState(null)
    let [wind_deg, setWindDeg] = useState(null)
    let [pressure, setPressure] = useState(null)
    let [dew_point, setDewPoint] = useState(null)
    let [uvi, setUvi] = useState(null)
    let [iconId, setIconId] = useState(null)
    let [forecastTime, setForecastTime] = useState(13)

    useEffect(
        () => {
            if (props.latitude || props.longitude) {
                let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${props.apiToken}&units=metric&exclude=minutely`
                axios.get(url).then(response => {
                    let temp = String(response.data['current']['temp'])
                    setTemperature(temp.substring(0, 4))
                    setFeelsLike(response.data['current']['feels_like'])
                    setSky(response.data['current']['weather'][0]['description'])
                    setHumidity(response.data['current']['humidity'])
                    setWindSpeed(response.data['current']['wind_speed'])
                    setWindDeg(response.data['current']['wind_deg'])
                    setPressure(response.data['current']['pressure'])
                    setDewPoint(response.data['current']['dew_point'])
                    setUvi(response.data['current']['uvi'])
                    setIconId(response.data['current']['weather'][0]['id'])
                    let unix_timestamp = response.data['current']['dt']
                    var date = new Date(unix_timestamp * 1000);
                    setForecastTime(date.getHours());
                });
            }
        },
        [props.latitude, props.longitude],
    );

    return (
        <div className="current_weather">
            <div className="left_block">
                <div className="weather_svg">
                    <WeatherSvg {...{ iconId, forecastTime} } />
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
                        <div className="card_left">
                            <p className="spec_key"><span>Humidity</span><span>{humidity} %</span></p>
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