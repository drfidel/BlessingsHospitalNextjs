import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const ServicesOffered = () => {
  return (
    <section className="feature_part">
        <div className="container px-4">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="section_tittle text-center">
                        <h2>Our services</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-3 col-sm-12">
                    <div className="single_feature">
                        <div className="card p-2 mx-2 single_feature_part">
                            <span className="single_feature_icon"><img src="assets/img/icon/feature_1.svg" alt=""  /></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                    <div className="single_feature">
                        <div className="card p-2 mx-2 single_feature_part">
                            <span className="single_feature_icon"><img src="assets/img/icon/feature_2.svg" alt=""  /></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                </div>
                <div className="card p-3 col-lg-4 col-sm">
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img className="d-block w-100" src='assets/img/service.png' alt=''/>
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src='assets/img/doctor/doctor_3.png' alt='' />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src='assets/img/doctor/doctor_1.png' alt='' />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="single_feature">
                        <div className="card p-2 mx-2 single_feature_part">
                            <span className="single_feature_icon"><img src="assets/img/icon/feature_1.svg" alt=""/></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                    <div className="single_feature">
                        <div className="card p-2 mx-2 single_feature_part">
                            <span className="single_feature_icon"><img src="assets/img/icon/feature_2.svg" alt=""/></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServicesOffered;