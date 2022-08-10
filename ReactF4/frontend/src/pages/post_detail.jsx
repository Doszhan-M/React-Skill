import React, { useState, useEffect } from "react";
import "../styles/css/post_detail.min.css";
import { useSearchParams } from "react-router-dom"

import api from "../api"


function PostPage() {

    let [post, setPost] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    let id = searchParams.get("id");

    const getPostDetail = (id) => {
        api.fetchPostDetail(id).then(response => {
            setPost(response.data)
        })
    }

    useEffect(()=> getPostDetail(id), [id])
    return (
        <div className="post_detail">
            <h1>{post.title}</h1>
            <div className="detail">
                <div className="test">{post.text}</div>
                <img src={post.image}alt="" />
            </div>
        </div>
    )
}
export default PostPage;