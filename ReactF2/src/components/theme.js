import React, { useState } from "react";
import $ from 'jquery';

import "../styles/css/theme.min.css";

import Switch from "react-switch";
import DarkMode from '../img/svg/clear-night.svg';
import DayMode from '../img/svg/clear-day.svg';

import backgroundVideoDark from "../img/neon.mp4";
import backgroundPoster from "../img/neon.png";
import backgroundVideoDAy from "../img/lights.mp4";
import preloader_icon from '../img/preloader.svg';



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

    $(window).on('load', function () {
        var $preloader = $('#p_prldr'),
            $svg_anm = $preloader.find('.svg_anm');
        $svg_anm.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });

    const myStyle = {
        background: `url(${preloader_icon}) center center no-repeat`
    };

    return (
        <div >
            <div id="p_prldr">
                <div className="contpre">
                    <span className="svg_anm" style={myStyle}></span>
                </div>
            </div>
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
        </div>
    )
}

export default Theme;