import React, { useState, useEffect } from "react";
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

    const dayDark = () => {
        const dayItems = document.getElementsByClassName("accordion-button");
        [].forEach.call(dayItems, function (elem) {
            if (props.isDark) {
                elem.style.background = ''
            } else {
                elem.style.background = 'linear-gradient(45deg, #9890e3, #b1f4cf)'
            }
        });
    }
    useEffect(() => dayDark())

    return (
        <div className="daily">
            <div className="daily_title">Daily</div>
            <div className="daily_items">
                {daily.map(day => <Day key={day.dt} day={day}/>)}
            </div>
        </div>
    )
}

export default Daily;