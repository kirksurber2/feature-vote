import { useState } from 'react'
import './Feature.css'

import { IoChevronForward, IoChevronBack,IoChevronBackOutline  } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown, FaThumbsDown } from "react-icons/fa6";



export default function Feature(props) {

    return(
        

        <div className='featureBox' id={props.id} onClick={props.linkClick}>
            <div className='infoArea'>
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
            </div>
            <div className='thumbsArea'>
                <div className='thumb'>
                    <FaRegThumbsUp size={25} className='icon'/>
                    <p>{props.likes}15</p>
                </div>
                <div className='thumb'>
                    <FaRegThumbsDown size={25} className='icon'/>
                    <p>{props.disLikes}15</p>
                </div>
            </div>
        </div>
        
    )
}