import React from "react"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

const Card = function(){
    return(
          <div id="card">
        <Info />
        <About />
        <Interests />
        <Footer />
        </div>
    )
}

export default Card