import React, { useState, useRef, useEffect } from "react";
import "../styles/css/daily.min.css";

import Day from './day'


function Daily(props) {

    let [daily, setDaily] = useState([])
    useEffect(
        () => {
            if (props.weatherForecast) {
                setDaily(props.weatherForecast.daily)
            }
        }, [props.weatherForecast]
    )
    return (
        <div className="daily">
            <div className="daily_title">Daily</div>
            <div className="daily_items">
                {daily.map(day => <Day key={day.dt} day={day} />)}
            </div>
        </div>
    )
}

export default Daily;