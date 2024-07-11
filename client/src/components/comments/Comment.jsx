import { useState } from "react";
import './Comment.css'


export default function Comment(props){

    return(
        <div className="commentBox">
            <div className="infoArea"> 
                <h3>Title: {props.title}</h3>
                <h4>Desc: {props.description}</h4>
                <h6>Author:  First{props.firstName} Last{props.lastName}</h6>
            </div>
            <div className="likeIcons">
                <div className="thumbsIcon">
                    Like Icon
                    {props.likes}
                </div>
                <div className="thumbsIcon">
                    DisLike Icon
                    {props.disLikes}
                </div>
            </div>

        </div>
    )
}