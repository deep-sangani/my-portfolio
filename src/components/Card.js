import React, { useState } from 'react'
import "./Card.css"


export default function Card({ project, setpassproject }) {


    const handleclick = (e) => {
        setpassproject(project)

    }

    return (
        <>

            <div className="card">
                <div className="card-overlay" onClick={e => handleclick(e)}>
                    <div className="middle">
                    <h3> Click for More info</h3>
                </div></div>
                <div className="top">
                    <img src={project.img} alt="" />
                </div>
                <div >

                    <div className="bottom">
                        <p>{project.desc}  </p>
                    </div>
                </div>
            </div>
        </>
    )



}
