import React, { useState, useEffect } from "react";
import "../styles/css/geo.min.css";
import Form from 'react-bootstrap/Form';

function Geo() {

    let [latitude, setPosition] = useState(null);

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            console.log(lat)
            setPosition(lat)
        })
    }
    useEffect(() => handleClick(), [])

    return (
        <div className="geo">
            <div className="location">
                {/* <p id="demo">Latitude: {latitude}</p> */}
                <p className="city">Almaty</p>
                <p className="country">Kazakhstan</p>
                <p className="dateline">Thursday, 12 May 2022 13:15</p>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter your location" />
                </Form.Group>
            </Form>
        </div>

    )
}

export default Geo;