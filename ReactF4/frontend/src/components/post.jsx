import React from "react";
import { NavLink } from "react-router-dom"
import "../styles/css/post.min.css";


function PostCard(props) {

    return (
        <div className="post">
            <h2>{props.post.title}</h2>
            <img src={props.post.image} alt="" />
            <p>{props.post.description}</p>
            <p><b>Get the recipe:</b> <NavLink to={`/category/${props.post.id}`}>{props.post.title}</NavLink></p>
        </div>
    )
}
export default PostCard;