import React from 'react'
import {Bounce, Fade, Zoom} from "react-reveal"

function Design(){
    return(
        <div className="deco">
           <Zoom>
           <div className="round"></div>
            <div className="round"></div>
            <div className="round"></div>
            <div className="round"></div>
            <div className="round"></div>
           </Zoom>
            </div>
    )
}

export default function Home() {
    return (
        <div className="home" id="home">
           <div className="name">
          <Fade top delay={1000}> <h1><span>Hii</span>, I'm Deep Sangani</h1></Fade>
           </div>
            <Design/>
           <Bounce bottom delay={1000}> <h4>Software Engineer</h4></Bounce>
        </div>
    )
}
