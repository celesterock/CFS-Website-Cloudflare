import React from 'react'
import '../styles/About.css'
import BannerImage from '../assets/CFSHistory.png';



function About() {
  return (
    <div className="about">
        <div className="aboutPhoto" style={{ backgroundImage: `url(${BannerImage})`}}></div>
        <div className="aboutText">
            <h1>ABOUT US</h1>
            <p> Country Farm Supply is a family-owned and operated business that has been serving the community since 1967.<br></br><br></br>
                Whether you're a commercial farmer or a weekend gardener, we cater to all your gardening needs. 
                From everyday essentials to specialized products, we offer everything necessary to cultivate your passion. 
                With decades of dedicated service, we pride ourselves on providing not only the tools but also the advice and 
                support needed to help your projects flourish. <br></br><br></br>
                
                Trust us to be the foundation of your growth as we continue to grow with each of you. </p>
        </div>
      
    </div>
  )
}

export default About
