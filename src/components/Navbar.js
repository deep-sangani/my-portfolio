import React from 'react'
import "./Navbar.css"
import {Link} from "react-scroll"
import {Fade} from "react-reveal"

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="left">
                <Fade left><h1>deep sangani</h1></Fade>
            </div>
            <div className="right">
                <ul>
                  <li><Link to="home" smooth={true} offset={50} activeClass='active'>Home</Link></li>
                    <Link to="aboutme" smooth={true} offset={50}><li>About me</li></Link>
                    <Link to="portfolio" smooth={true} offset={50}><li>My Projects</li></Link>
                    <Link to="services" smooth={true} offset={50}><li>Services</li></Link>
                    <Link to="contect" smooth={true} offset={50}><li>Contect</li></Link>
                </ul>
            </div>
        </div>
    )
}
