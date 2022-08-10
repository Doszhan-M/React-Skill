import React, { useState, useEffect } from "react";
import "../styles/css/home.min.css";

import api from "../api"
import PostCard from "../components/post"


function HomePage() {

    let [posts, setPosts] = useState()

    function getPosts() {
        api.fetchAllPosts().then(response => {
            setPosts(response.data)
        });
    }

    useEffect(() => getPosts(), [])

    return (
        <div className="home_page">
            {posts?.map(post => {
                return <PostCard key={post.id} post={post} />
            })}
        </div>
    )
}
export default HomePage;