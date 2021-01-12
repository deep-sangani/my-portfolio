import React from 'react'
import "./Projectimgs.css"
import posts from "../pages/assets/pizzainfo"


function CardProject({passproject}){
   return(
      <div className="cardproject">
         <h2>{passproject.title}</h2>
         <img src={passproject.img} alt=""/>
         <a href={passproject.link}>GitHub link</a>
            <div className="desc">
               <h3>{passproject.desc}</h3>
            </div>
      </div>
   )
}

export default function ProjectImgs({passproject,setpassproject}) {
    return (
        <div className="projectimgs" onClick={()=>setpassproject(null)}>
           <div className="wrapper">
           <h1>Real-time Pizza App</h1>
           {
              posts.map(post=>{
                return <CardProject passproject={post} />
              })
           }
            
           
           </div>
            
        </div>
    )
}
