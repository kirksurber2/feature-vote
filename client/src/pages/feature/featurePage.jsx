import { useState } from "react";
import './featurePage.css'

export default function FeaturePage(props) {

    return (
        <main>
            <div className="titleArea">
                <h1>Title{props.title}</h1>
                <h4>Description{props.description}</h4>
            </div>

            <div className="commentsArea">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </main>
    )
}