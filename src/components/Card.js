import React, { useState } from 'react'
import "./Card.css"


export default function Card({project,setpassproject}) {
    

  const handleclick=(e)=>{
      setpassproject(project)
     
  }
   
        return (
            <>
           
            <div className="card">
                <div className="top">
                    <img src={project.img} alt=""  onClick={e=>handleclick(e)} />
                </div>
                  <div >
                  <div className="middle">
                        <a href={project.link}>Github Link</a>
                    </div>
                    <div className="bottom">
                        <p>{ project.desc}  </p>
                    </div>
                  </div>
            </div>
            </>
        )
    


}
