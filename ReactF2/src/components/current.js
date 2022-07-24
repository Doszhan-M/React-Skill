import React, { useState, useEffect } from "react";
import axios from "axios"
import "../styles/css/current.min.css";


function Current() {

    return (
        <div className="current_weather">
            <div className="left_block">
                <div className="weather_svg"></div>
                <div className="temperature"></div>
            </div>
            <div className="right_block">
                <div className="specification"></div>
            </div>
        </div>
    )
}

export default Current;