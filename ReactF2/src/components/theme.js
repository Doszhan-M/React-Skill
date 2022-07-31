import React, { useState } from "react";
import "../styles/css/theme.min.css";

import Switch from "react-switch";
import DarkMode from '../img/svg/clear-night.svg';
import DayMode from '../img/svg/clear-day.svg';

import backgroundVideoDark from "../img/neon.mp4";
import backgroundPoster from "../img/neon.png";
import backgroundVideoDAy from "../img/lights.mp4";
import { Sugar } from 'react-preloaders2';


function Theme(props) {
    let [checked, setChecked] = useState(true)
    let [themeBackground, setThemeBackground] = useState(backgroundVideoDark)

    const themeChange = checked => {
        setChecked(checked)
        if (themeBackground == backgroundVideoDark) {
            setThemeBackground(backgroundVideoDAy)
            props.setDark(false)
        } else {
            setThemeBackground(backgroundVideoDark)
            props.setDark(true)
        }
    }
    return (
        <div >
            <div className="dark_mode">
                <Switch onChange={themeChange} checked={checked} onColor={'#790653'}
                    checkedIcon={<img className="night" src={DarkMode} alt="icon_svg" />}
                    uncheckedIcon={<img className="day" src={DayMode} alt="icon_svg" />}
                    handleDiameter={0.5}
                />

                <video key={themeBackground} autoPlay muted loop preload="auto" poster={backgroundPoster} className="preview__video">
                    <source type="video/mp4" src={themeBackground} />
                </video>
            </div>
            <Sugar background="linear-gradient(90deg, rgba(28,26,26,1) 0%, rgba(143,56,53,1) 50%, rgba(17,66,186,1) 100%)"/>
        </div>
    )
}
export default Theme;