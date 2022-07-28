import React, { useState, useRef, useEffect } from "react";
import "../styles/css/daily.min.css";

import ScrollContainer from 'react-indiana-drag-scroll'
import { Accordion } from 'react-bootstrap-accordion'
import 'react-bootstrap-accordion/dist/index.css'


function Daily() {

    // const container = useRef(null);
    // useEffect(() => {
    //     container.current.getElement().scrollTo(0, Math.random() * 500);
    // }, []);

    return (
        <div className="daily">
            <div className="daily_title">Daily</div>
            <div className="daily_items">
                {/* <ScrollContainer className="container" ref={container} horizontal={false}> */}
                    <div className="day"></div>
                    <Accordion  title="Accordion Title">
                        <div className="day1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                        </div>
                    </Accordion>

                    <div className="day"></div>
                    <div className="day"></div>
                    <div className="day"></div>
                    <div className="day"></div>
                    <div className="day"></div>
                    {/* <div className="day_invisible"></div> */}
                {/* </ScrollContainer> */}
            </div>
        </div>
    )
}

export default Daily;