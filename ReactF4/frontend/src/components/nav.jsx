import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios"
import "../styles/css/nav.min.css";

import { Context } from "../context"


function Categories() {

    const {categories, setCategories} = useContext(Context)

    function getCategories(params) {
        let url = `http://127.0.0.1:8000/recipes/all_categories/`
        axios.get(url).then(response => {
            setCategories(response.data)
        });
    }

    useEffect(() => getCategories(), [])

    return (

        <div className="categories">
            <h1>
                Categories:
            </h1>
            {categories?.map((category) => {
                    {return <NavLink key={category.id} to={`/category/${category.id}`}>{category.title}</NavLink>}
                })
            }
        </div>
    );
}

export default Categories;