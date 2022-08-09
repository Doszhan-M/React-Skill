import axios from "axios"
import React, { useState, useEffect, useContext } from "react";
import "../styles/css/category.min.css";
import { NavLink, useParams } from "react-router-dom"
import { Routes, Route, Link } from "react-router-dom"

import { Context } from "../context"
import {PostCard} from "../components/post"


function CategoryPage(props) {
    const { id } = useParams()

    const { categories } = useContext(Context)
    let img = ''
    categories?.map(category => {
        if (id == category.id) {
            img =  category.image
        }
    })

    let [posts, setPosts] = useState()
    function getPosts(params) {
        let url = `http://127.0.0.1:8000/recipes/post_category/${id}/`
        axios.get(url).then(response => {
            setPosts(response.data)
        });
    }
    useEffect(() => getPosts(), [])

    return (
        <div className="category_page">
            <img src={img} alt="" />
            <div className="posts">

            </div>
        </div>
    )
}
export default CategoryPage;