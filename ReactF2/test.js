import React, { useState, useEffect } from "react";
import axios from "axios"
import "../styles/css/geo.min.css";

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
    useEffect(() => {
        let intervalId = setInterval(setDateTime, 30000)
        return (() => { clearInterval(intervalId) })
    }, [])


    const currentPosition = () => {
        if (navigator.geolocation) {
            navigator.permissions.query({ name: 'geolocation' }).then(function (permissionStatus) {
                if (permissionStatus.state == 'denied' || permissionStatus.state == 'prompt') {
                    let latitude = '51.5073219'
                    let longitude = '-0.1276474'
                    let url = `http://api.openweathermap.org/geo/1.0/reverse?limit=1&appid=${props.apiToken}&lat=${latitude}&lon=${longitude}`
                    axios.get(url).then(response => {
                        setCity(response.data[0]['name'])
                        setCountry(countries.resolveName(response.data[0]['country']))
                        setDateTime()
                    });
                }
                if (permissionStatus.state == 'granted') {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            let latitude = position.coords.latitude;
                            let longitude = position.coords.longitude;
                            props.setLatitude(latitude)
                            props.setLongitude(longitude)
                            let url = `http://api.openweathermap.org/geo/1.0/reverse?limit=1&appid=${props.apiToken}&lat=${latitude}&lon=${longitude}`
                            axios.get(url).then(response => {
                                setCity(response.data[0]['name'])
                                setCountry(countries.resolveName(response.data[0]['country']))
                                setDateTime()
                            });
                        })
                    }
                }
            });

        }
    }
    useEffect(() => currentPosition(), [])

    navigator.permissions.query({ name: 'geolocation' }).then(function (permissionStatus) {
        console.log('geolocation permission state is ', permissionStatus.state);
        permissionStatus.onchange = function () {
            console.log('geolocation permission state has changed to ', this.state);
            currentPosition()
        };
    });


    const searchCity = e => {
        e.preventDefault();
        let targetCity = e.target.value
        let url = `https://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${props.apiToken}&q=${targetCity}`
        axios.get(url).then(response => {
            props.setLatitude(response.data[0]['lat'])
            props.setLongitude(response.data[0]['lon'])
            setCity(response.data[0]['name'])
            setCountry(countries.resolveName(response.data[0]['country']))
            setDateTime()
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
                <input onChange={searchCity} placeholder="Enter your location"></input>
            </div>
        </div>
    )
}

export default Geo;