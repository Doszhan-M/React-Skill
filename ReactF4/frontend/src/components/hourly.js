import React, { useEffect, useState, useRef } from "react";
import "../styles/css/hourly.min.css";
import Hour from './hour';

import ScrollContainer from 'react-indiana-drag-scroll'


function Hourly(props) {

    let [firstDayHourly, setFirstDayHourly] = useState([])
    let [secondDayHourly, setSecondDayHourly] = useState([])

    useEffect(
        () => {
            if (props.weatherForecast) {
                let firstDay = [];
                props.weatherForecast.hourly.map((hour, index) => {
                    if (index < 25) {firstDay.push(hour)}
                })
                setFirstDayHourly(firstDay)

                let secondDay = [];
                props.weatherForecast.hourly.map((hour, index) => {
                    if (index > 24) {secondDay.push(hour)}
                })
                setSecondDayHourly(secondDay)
            }
        }, [props.weatherForecast]
    )
    const container = useRef(null);
    useEffect(() => {
        container.current.getElement().scrollTo(0, Math.random() * 10000);
    });


    const onClick = event => {
        const parent = event.target.parentNode
        if (parent.className === 'hourly_item') {
            let index = parent.dataset.index
            props.setCurrentIndex(index)
        }
    }
    let isDark = props.isDark
    return (
        <div className="hourly">
            <div className="hourly_title">Today</div>
            <div className="hourly_items_line">
                <ScrollContainer className="container flex_container" ref={container}>
                    {firstDayHourly.map((hour, index) => <Hour key={hour.dt} {...{ hour, index, onClick, isDark }} />)}
                </ScrollContainer>
            </div>
            <div className="hourly_title">Tomorrow</div>
            <div className="hourly_items_line">
                <ScrollContainer className="container flex_container" ref={container}>
                    {secondDayHourly.map((hour, index) => <Hour key={hour.dt} {...{ hour, index, onClick, isDark }} />)}
                </ScrollContainer>
            </div>
        </div>
    )
}

export default Hourly;
