import React, { useState, useEffect } from "react";
import "../styles/main.css";
import axios from "axios"



function Main() {

    let [latitude, setPosition] = useState(null);

    const handleClick = () => {
        console.log(55555)
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            console.log(lat)
            setPosition(lat)
        })
    }
    useEffect(() =>  handleClick(), [])

    return (
        <main>
            <p>Click the button to get your coordinates.</p>

            {/* <button onClick={handleClick}>Try It</button> */}
            <p id="demo">Latitude: {latitude}</p>
        </main>
    )
}

export default Main;