import React, { Component, useState } from "react";
import "../styles/Countries.css";
import axios from "axios"
import { Table } from "react-bootstrap";

import Country from "./Country"
import "../styles/Countries.css"


function Countries() {

    const [countries, setCountries] = useState([])
    if(!countries.length) {
        axios.get("https://restcountries.com/v3.1/all").then(response => {
            console.log(response.data[1].altSpellings[0]) // уникальное поле
            setCountries(response.data);
        })
    }

    return (
        <Table className={"countries"}>
            <thead><tr><th>Name</th><th>Capital</th><th></th></tr></thead>
            <tbody>
                {
                    countries.map(country => <Country key={country.altSpellings[0]} country={country}/>
                )}
            </tbody>
        </Table>
    )
};


export default Countries;