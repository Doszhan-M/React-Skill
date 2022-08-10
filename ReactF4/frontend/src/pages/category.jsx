import React, { useState, useEffect, useContext } from "react";
import "../styles/css/category.min.css";
import { useParams } from "react-router-dom"

import { Context } from "../context"
import PostCard from "../components/post"
import api from "../api"


function CategoryPage(props) {
    const { id } = useParams()

    const { categories } = useContext(Context)
    
    let img = ''
    categories?.map(category => {
        if (id == category.id) {
            img = category.image
        }
    })

    let [posts, setPosts] = useState()

    const getPosts = () => {
        api.fetchPosts(id).then(response => {
            setPosts(response.data)
        });
    }

    useEffect(() => getPosts(), [id])

    return (
        <div className="category_page">
            <img className="title_img" src={img} alt="" />
            <div className="posts">
                {posts?.map(post => {
                    return <PostCard key={post.id} post={post} />
                })}
            </div>
        </div>
    )
}
export default CategoryPage;