import React from 'react'
import myAvatar from "./assets/myAvatar.svg"
import {Fade} from "react-reveal"

export default function AboutMe() {
    return (
        <div className="aboutme" id="aboutme">
           <div className="container">
          <Fade left>
          <div className="left">
                <img src={myAvatar} alt=""/>
            </div>
          </Fade>
            <Fade top>
            <div className="right">
                <h2>ABOUT ME</h2>
                <p>I am pursuing my <span>B.tech</span> degree from <span>Marwadi University</span>-Rajkot. My hobby is to build creative Applications and Softwares and helping the community.</p>
                <p>Curruntly I am doing some awasome projects with javascript and I have experinced of various javascript Frameworks Like <span>React, React-Native, Express.Js</span> etc. </p>
            </div>
            </Fade>
           </div>
        </div>
    )
}
