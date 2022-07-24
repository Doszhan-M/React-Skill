import React, {useState} from "react";
import "../styles/css/main.min.css";

import Geo from "./geo"
import Current from "./current"

import backgroundVideo from "../img/neon.mp4";
import backgroundPoster from "../img/neon.png";


function Main() {

    const apiToken = 'ab175a054c6d3bf1f1ae8fb08204d3ff'

    let [latitude, setLatitude] = useState(null)
    let [longitude, setLongitude] = useState(null)

    return (
        <main>
            <video autoPlay muted loop preload="auto" poster={backgroundPoster} className="preview__video">
                <source type="video/mp4" src={backgroundVideo} />
            </video>
            <Geo {...{ apiToken, setLatitude, setLongitude} } />
            <Current {...{latitude, longitude}}/>
        </main>
    )
}

export default Main;