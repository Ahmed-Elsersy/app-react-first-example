import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import ScrollSpy from "react-ui-scrollspy";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <ScrollSpy>
        <Portfolio />
        <About />
          <Contact />
          </ScrollSpy>
        <Modal/>
        <Footer />
       
       

      </>
     
    )
  }
}
