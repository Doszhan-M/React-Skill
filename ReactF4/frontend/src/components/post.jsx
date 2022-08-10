import React from "react";
import { NavLink } from "react-router-dom"
import "../styles/css/post.min.css";


function PostCard(props) {

    return (
        <div className="post">
            <h2>{props.post.title}</h2>
            <img className="post_img" src={props.post.image} alt="" />
            <div className="desc">{props.post.description}
            <p className="link">
                <b>Get the recipe:</b> 
                <NavLink to={`/post?id=${props.post.id}`}>{props.post.title}</NavLink></p>
            </div>
        </div>
    )
}
export default PostCard;