import React, { useState, useEffect } from "react";
import axios from "axios"
import "../styles/css/geo.min.css";

import Theme from "./theme"


function Geo(props) {

    const countries = require('alpha2-countries')
    let [city, setCity] = useState('------')
    let [country, setCountry] = useState('------')
    let [dateline, setDateline] = useState('------')
    let [preloaderStatus, setPreloaderStatus] = useState(true)

    function setDateTime() {
        let date = String(new Date());
        let to = date.search('GMT');
        let timeline = date.substring(0, to - 4);
        setDateline(timeline)
    }

    function setPosition() {
        if (props.latitude, props.longitude) {
            let url = `https://api.openweathermap.org/geo/1.0/reverse?limit=1&appid=${props.apiToken}&lat=${props.latitude}&lon=${props.longitude}`
            axios.get(url).then(response => {
                setCity(response.data[0]['name'])
                setCountry(countries.resolveName(response.data[0]['country']))
                setDateTime()
                setPreloaderStatus(false)
            });
        }
    }

    function showError(error) {
        if (error) {
            console.log(error.message)
        }
    }

    const currentPosition = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                props.setLatitude(latitude)
                props.setLongitude(longitude)
            }, showError)
        } 
        setPosition()
    }

    const positionCity = () => {
        if (props.latitude && props.longitude) {
            let url = `https://api.openweathermap.org/geo/1.0/reverse?limit=1&appid=${props.apiToken}&lat=${props.latitude}&lon=${props.longitude}`
            axios.get(url).then(response => {
                setCity(response.data[0]['name'])
                setCountry(countries.resolveName(response.data[0]['country']))
                setDateTime()
            });
        }
    }

    useEffect(() => currentPosition(), [])
    useEffect(() => positionCity(), [props.latitude, props.longitude])
    useEffect(() => { setTimeout(() => { setDateTime() }, 3000) }, [props.latitude, props.longitude])
    useEffect(() => { setDateline(props.indexTime) }, [props.indexTime],)
    useEffect(() => {
        if (dateline == '------') {
            setInterval(() => { setDateTime() }, 30000);
        }
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

    return (
        <div className="geo">
            <div className="location">
                <p className="city">{city}</p>
                <p className="country">{country}</p>
                <p className="dateline">{dateline}</p>
            </div>
            <div className="search_form" >
                <Theme setDark={props.setDark} preloaderStatus={preloaderStatus} />
                <input onChange={searchCity} placeholder="Enter your location"></input>
            </div>
        </div>
    )
}
export default Geo;
