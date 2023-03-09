import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = function(){
    return(
        <div id="footer-background">
        <div id="footer">
        <a href="https://twitter.com/joycekwo12">
            <button className="social-button"><FontAwesomeIcon icon={faTwitter}/></button>
            </a>
            
        <a href="https://facebook.com/@joycekwo12">
        <button className="social-button"><FontAwesomeIcon icon={faFacebook}/></button>
        </a>
        <a href="https://instagram.com/justjoycewong">
        <button className="social-button"><FontAwesomeIcon icon={faInstagram}/></button>
        </a>
        <a href="https://github.com/joyce-wong">
        <button className="social-button"><FontAwesomeIcon icon={faGithub} /></button>
        </a>
        </div>
        </div>
    )
}

export default Footer