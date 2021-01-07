import React from 'react'
import "./Projectimgs.css"

export default function ProjectImgs({passproject,setpassproject}) {
    return (
        <div className="projectimgs" onClick={()=>setpassproject(null)}>
           <div className="wrapper">
           <h1>Real-time Pizza App</h1>
            <img src={passproject.img} alt=""/>
            <div className="desc">
               <h3>{passproject.desc}</h3>
            </div>
            <img src={passproject.img} alt=""/>
            <div className="desc">
               <h3>{passproject.desc}</h3>
            </div>
            <img src={passproject.img} alt=""/>
            <div className="desc">
               <h3>{passproject.desc}</h3>
            </div>
            <img src={passproject.img} alt=""/>
            <div className="desc">
               <h3>{passproject.desc}</h3>
            </div>
           </div>
            
        </div>
    )
}
