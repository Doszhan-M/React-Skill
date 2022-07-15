import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types"

import "../styles/Country.css"


function Country(props) {

    const [selected, changeSelected] = useState(false);

    return (
        <tr className={selected ? "bg-dark text-white" : ""}>
            <td>{props.country.name.official}</td>
            <td>{props.country.capital}</td>
            <td>
                {
                    selected ? <Button variant="danger" onClick={() => changeSelected(false)}>Remove</Button> :
                    <Button variant="primary" onClick={() => changeSelected(true)}>Add</Button>
                }
            </td>
        </tr>
    )
}

Country.propTypes = {
    country: PropTypes.object
}

export default Country