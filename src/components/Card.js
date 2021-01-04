import React from 'react'
import "./Card.css"
import pizza from "../pages/assets/pizza.png"
export default function Card() {
    
   
        return (
            <div className="card">
                <div className="top">
                    <img src={pizza} alt="" />
                </div>
                  <div >
                  <div className="middle">
                        <a href="https://github.com/deep-sangani/Realtime-Pizza-website">Github Link</a>
                    </div>
                    <div className="bottom">
                        <p>This is my project based on full-stack development.I used Ejs,Express,Larawl-mix and Socket io  </p>
                    </div>
                  </div>
            </div>
        )
    


}
