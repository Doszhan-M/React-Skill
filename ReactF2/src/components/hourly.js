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


    const onClick = event => {
        const parent = event.target.parentNode
        if (parent.className === 'hourly_item') {
            let index = parent.dataset.index
            props.setCurrentIndex(index)
        }
    }

    return (
        <div className="hourly">
            <div className="hourly_title">Hourly</div>
            <div className="hourly_items_line">
                <ScrollContainer className="container flex_container" ref={container}>
                    {hourly.map((hour, index) => <Hour key={hour.dt} {...{ hour, index, onClick }} />)}
                </ScrollContainer>
            </div>
        </div>
    )
}

export default Hourly;
