import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Info = function(){
    return(
        <div id="info">
        <img src="https://s3.amazonaws.com/justjoycewong.com/Portfolio/app/media/images/jw.jpg" alt="profile-photo" width="317px"/>
            <p id="name">
            Joyce Wong
            </p>
            <p id="title">
            Fullstack Developer
            </p>
            <a href="justjoycewong.com" id="website">
            justjoycewong.com
            </a>
            <div className="info-buttons">
            <a href="mailto:joycekwo12@gmail.com" method="get" target="_blank">
            <button id="email-button" type="submit">Mail  <FontAwesomeIcon icon={faEnvelope} /></button>
            </a>
            <a href="https://www.linkedin.com/in/joyce-k-wong/" method="get" target="_blank">
            <button id="linkedin-button" type="submit">LinkedIn <FontAwesomeIcon icon={faLinkedin}/></button>
            </a>
            </div>
        </div>
    )
}

export default Info