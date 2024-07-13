import { useState, useEffect } from "react";
import Feature from "../../components/feature/Feature";
import NavBar from "../../components/navbar/navbar";
import './HomePage.css'
import { Navigate } from "react-router-dom";

export default function HomePage() {
const [loggedIn, setLoggedIn] = useState(false)



function linkClick(e) {
        console.log(e.target.id)
   }


useEffect(() => {
    console.log("useEffect")
}, [])
    return(
        <main>
            <NavBar/>
            <div className="title">
                <h1>Find or Add Your Favorite Feature!</h1>
                <div className="titleUnderline"></div>
            </div>
            <div className="featureArea">
                <Feature 
                    title= 'New Feature'
                    description= 'A longer description of the feature'
                    id='1'
                    linkClick={linkClick}
                    
                    />
                <Feature 
                    title= 'New Feature'
                    description= 'A longer description of the feature'
                    id='2'
                    />
                <Feature 
                    title= 'New Feature'
                    description= 'A longer description of the feature'
                    id='3'
                />
                <Feature 
                    title= 'New Feature'
                    description= 'A longer description of the feature'
                    id='4'
                    />
            </div>
        </main>
    )
}