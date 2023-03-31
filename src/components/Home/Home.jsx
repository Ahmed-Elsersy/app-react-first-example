import React, { Component } from 'react'
import "./Home.css"
import imghome from "../../imgs/avataaars.svg"
export default class Home extends Component {
  render() {
    return (
      <>
      <section id='home' className="home bg-home-section text-white text-center pt-5">
        <div className="container d-flex align-items-center flex-column">
 
          <img className="home-avatar mb-5 w-25" src={imghome} />
   
          <h1 className="home-heading text-uppercase mb-0">Start React</h1>
    
          <div className="divider-custom divider-light d-flex justify-content-center align-items-center">
            <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
              <div className="divider-custom-line"></div>
          </div>
    <p className="home-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
  </div>
</section>

      </>
    )
  }
}
