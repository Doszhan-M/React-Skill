import React from "react";
import "../styles/css/notfound.min.css";

import Logo_404 from "../img/404.jpg"


function NotFoundPage() {


    return (
        <div className="not_found">
            <img src={Logo_404} alt="404_error" />
        </div>
    )
}
export default NotFoundPage;