import React from 'react'
import Card from '../components/Card'
import {Fade} from "react-reveal"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>My Projects</h1>
           <div className="cardContainer">
            <Fade bottom><Card/></Fade>
            <Fade top><Card/></Fade>
            <Fade bottom><Card/></Fade>
           
           </div>
        </div>
    )
}
