import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom"
import "../styles/css/nav.min.css";

import api from "../api"
import { Context } from "../context"


function Categories() {

    const {categories, setCategories} = useContext(Context)

    function getCategories() {
        api.fetchCategories().then(response => {
            setCategories(response.data)
        });
    }

    useEffect(() => getCategories(), [])

    return (

        <div className="categories">
            <h1>Categories:</h1>
            {categories?.map((category) => {
                    {return <NavLink key={category.id} to={`/category/${category.id}`}>{category.title}</NavLink>}
                })
            }
        </div>
    );
}

export default Categories;