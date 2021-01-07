import React,{useState}  from 'react'
import Card from '../components/Card'
import {Fade} from "react-reveal"
import pizza from "./assets/pizza.png"
import expence from "./assets/expence.gif"
import ProjectImgs from '../components/ProjectImgs'




export default function Portfolio() {
 var projects =[
    {   name:"Real-time Pizza App",
        img:pizza,
        link:"https://github.com/deep-sangani/Realtime-Pizza-website",
        desc:"Realtime pizza app is full stack project which include all type of e-comerce stuff like Item-menu,cart,payment option etc."

    },
    {   name:"Expence Tracker App",
        img:expence,
        link:"https://github.com/deep-sangani/Realtime-Pizza-website",
        desc:"Expense manager is app which is made in react and context api for batter store manager. "
    }

]

  const [passproject,setpassproject] = useState(null)

    return (
     
        <div className="portfolio" id="portfolio">
          {
              passproject && <ProjectImgs passproject={passproject} setpassproject={setpassproject} />
          }
            <>
            <h1>My Projects</h1>
           <div className="cardContainer">
           {
               projects.map(project=>{
                   return <Fade><Card project={project} setpassproject={setpassproject} /></Fade>
               })
           }
           
           </div>
           </>
        </div>
        
    )
}
