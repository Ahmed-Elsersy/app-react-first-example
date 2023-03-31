import React, { Component } from 'react'
import "./Portfolio.css"
import img1 from "../../imgs/cabin1.png"
import img2 from "../../imgs/cake2.png"
import img3 from "../../imgs/circus3.png"
import img4 from "../../imgs/game4.png"
import img5 from "../../imgs/safe5.png"
import img6 from "../../imgs/submarine6.png"
export default class Portfolio extends Component {
  render() {
    return (
      <>
        <section className="portfolio pt-5" id='portfolio'>
          <div className="container">
            <h2 className="portfolio-heading text-center text-uppercase mb-0">portfolio</h2>
            <div className="divider-custom divider-light d-flex justify-content-center align-items-center">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon"><i className="fa fa-star" /></div>
              <div className="divider-custom-line" />
            </div>
            <div className="row justify-content-center">

              <div className="col-md-4 mb-5">
                <div className="portfolio-item mx-auto position-relative" data-toggle="modal" data-target="#portfolioModal1">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className='img-fluid' src={img1}  />
                </div>
              </div>

              <div className="col-md-4 mb-5">
                <div className="portfolio-item mx-auto position-relative"
                  data-toggle="modal" data-target="#portfolioModal2">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className='img-fluid' src={img2}  />
                </div>
              </div>

              <div className="col-md-4 mb-5">
                <div className="portfolio-item mx-auto position-relative"
                  data-toggle="modal" data-target="#portfolioModal3">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className='img-fluid' src={img3}  />
                </div>
              </div>

              <div className="col-md-4 mb-5">
                <div className="portfolio-item mx-auto position-relative"
                  data-toggle="modal" data-target="#portfolioModal4">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className='img-fluid' src={img4}  />
                </div>
              </div>

              <div className="col-md-4 mb-5">
                <div className="portfolio-item mx-auto position-relative"
                  data-toggle="modal" data-target="#portfolioModal5">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className='img-fluid' src={img5}  />
                </div>
              </div>

              <div className="col-md-4 mb-5">
                <div className="portfolio-item mx-auto position-relative"
                  data-toggle="modal" data-target="#portfolioModal6">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className='img-fluid' src={img6}  />
                </div>
              </div>

            </div>
          </div>
        </section>

        

      </>
    )
  }
}
