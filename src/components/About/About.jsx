import React, { Component } from 'react'
import "./About.css"
export default class About extends Component {
  render() {
    return (
      <>
        <section className="about bg-home-section  text-white mb-0 pt-5 pb-5" id="about">
  <div className="container">
    <h2 className="about-heading text-center text-uppercase text-white">About</h2>
    <div className="divider-custom divider-light d-flex justify-content-center align-items-center">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon"><i className="fa fa-star" /></div>
              <div className="divider-custom-line" />
            </div>
    <div className="row text-left">
              <div className="offset-md-2 col-md-4">
                <p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
      <div className="col-md-4"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
    </div>
  </div>
</section>

      </>
    )
  }
}
