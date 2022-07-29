import React, { useState, useEffect } from "react";
import axios from "axios"
import "../styles/css/geo.min.css";
import Switch from "react-switch";
import DarkMode from '../img/svg/clear-night.svg';
import DayMode from '../img/svg/clear-day.svg';
import backgroundVideo from "../img/lights.mp4";


function Geo(props) {

    const countries = require('alpha2-countries')
    let [city, setCity] = useState('------')
    let [country, setCountry] = useState('------')
    let [dateline, setDateline] = useState('------')

    function setDateTime() {
        let date = String(new Date());
        let to = date.search('GMT');
        let timeline = date.substring(0, to - 4);
        setDateline(timeline)
    }

    const currentPosition = () => {

        navigator.permissions.query({ name: 'geolocation' }).then(function (permissionStatus) {
            console.log(permissionStatus.state)
            if (permissionStatus.state == 'denied' || permissionStatus.state == 'prompt') {
                let latitude = '51.5073219'
                let longitude = '-0.1276474'
                props.setLatitude(latitude)
                props.setLongitude(longitude)
                let url = `http://api.openweathermap.org/geo/1.0/reverse?limit=1&appid=${props.apiToken}&lat=${latitude}&lon=${longitude}`
                axios.get(url).then(response => {
                    setCity(response.data[0]['name'])
                    setCountry(countries.resolveName(response.data[0]['country']))
                    setDateTime()
                });
            }
        })
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                props.setLatitude(latitude)
                props.setLongitude(longitude)
            })
        }
    }

    const positionCity = () => {
        if (props.latitude && props.longitude) {
            let url = `http://api.openweathermap.org/geo/1.0/reverse?limit=1&appid=${props.apiToken}&lat=${props.latitude}&lon=${props.longitude}`
            axios.get(url).then(response => {
                setCity(response.data[0]['name'])
                setCountry(countries.resolveName(response.data[0]['country']))
                setDateTime()
            });
        }
    }

    useEffect(() => currentPosition(), [])
    useEffect(() => positionCity(), [props.latitude, props.longitude])
    useEffect(() => {
        let intervalId = setInterval(setDateTime, 30000)
        return (() => { clearInterval(intervalId) })
    }, [])


    const searchCity = e => {
        e.preventDefault();
        let targetCity = e.target.value
        let url = `https://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${props.apiToken}&q=${targetCity}`
        axios.get(url).then(response => {
            props.setLatitude(response.data[0]['lat'])
            props.setLongitude(response.data[0]['lon'])
        });
    }

    let [checked, setChecked] = useState(true)

    const themeChange = checked => {
        setChecked(checked)
        const img = document.getElementsByClassName("preview__video");
        img.src = backgroundVideo
        console.log(img)
    }

    return (
        <div className="geo">
            <div className="location">
                <p className="city">{city}</p>
                <p className="country">{country}</p>
                <p className="dateline">{dateline}</p>
            </div>
            <div className="search_form" >
                <div className="dark_mode">
                    <Switch onChange={themeChange} checked={checked} onColor={'#790653'}
                        checkedIcon={<img className="night" src={DarkMode} alt="icon_svg" />} 
                        uncheckedIcon={<img className="day" src={DayMode} alt="icon_svg" />} 
                        handleDiameter={0.5}/>
                </div>
                <input onChange={searchCity} placeholder="Enter your location"></input>
            </div>
        </div>
    )
}

export default Geo;
