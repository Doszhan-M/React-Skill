import React, { useEffect, useState, useRef } from "react";
import "../styles/css/hourly.min.css";
import Hour from './hour';

import ScrollContainer from 'react-indiana-drag-scroll'


function Hourly(props) {

    let [hourly, setHourly] = useState([])

    useEffect(
        () => {
            if (props.weatherForecast) {
                setHourly(props.weatherForecast.hourly)
            }
        }, [props.weatherForecast]
    )

    const container = useRef(null);
    useEffect(() => {
        container.current.getElement().scrollTo(0, Math.random() * 10000);
    }, []);

    return (
        <div className="hourly">
            <div className="hourly_title">Hourly</div>
            <div className="hourly_items_line">
                <ScrollContainer className="container flex_container" ref={container}>
                    {hourly.map(hour => <Hour key={hour.dt} hour={hour} />)}
                </ScrollContainer>
            </div>
        </div>
    )
}

export default Hourly;
