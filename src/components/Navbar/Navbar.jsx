import React, { Component } from 'react';

import "./Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <>

          <nav className="navbar navbar-expand-lg text-center text-uppercase fixed-top navbar-bg text-white ">
            <div className="container text-white">
              <a className="navbar-brand text-white" href="#">Strat React</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                  
                <li className="nav-item">
                    <a className="nav-link py-3 rounded" data-to-scrollspy-id="portfolio" href="#Portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  py-3 rounded" data-to-scrollspy-id="about" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  py-3 rounded" data-to-scrollspy-id="contact" href="#contact">Contact</a>
                </li>
                
                  
                </ul>
                
              </div>
            </div>
          </nav>

      </>
    )
  }
}
