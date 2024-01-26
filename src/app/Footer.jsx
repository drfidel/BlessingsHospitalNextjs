import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-area">
        <div className="footer section_padding">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-2 col-md-4 col-sm-6 single-footer-widget">
                        <a href="/" className="footer_logo"> <img src="assets/img/logo.png" alt="#"/> </a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <div className="social_logo">
                            <a href="#"><i className="ti-facebook"></i></a>
                            <a href="#"> <i className="ti-twitter"></i> </a>
                            <a href="#"><i className="ti-instagram"></i></a>
                            <a href="#"><i className="ti-skype"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/about">About us</a></li>
                            <li><a href="#">Department</a></li>
                            <li><a href="#">Diabetes Clinic</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Department</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#">In the community</a></li>
                            <li><a href="#">IU health foundation</a></li>
                            <li><a href="#">Family support </a></li>
                            <li><a href="#">School Services</a></li>
                            <li><a href="#">Community clinic</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-md-6 single-footer-widget">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Diabetes</a></li>
                            <li><a href="#"> Neonatal Care</a></li>
                            <li><a href="#"> Maternal </a></li>
                            <li><a href="#"> Doctors Take</a></li>
                            <li><a href="#"> Gastroenterology</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-6 single-footer-widget">
                        <h4>Newsletter</h4>
                        <p>Seed good winged wherein which night multiply
                            midst does not fruitful</p>
                        <div className="form-wrap" id="mc_embed_signup">
                            <form target="_blank"
                                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                method="get" className="form-inline">
                                <input className="form-control" name="EMAIL" placeholder="Your Email Address"
                                    onFocus={()=>{}} onBlur={()=>{}}
                                    required="" type="email"/>
                                <button className="click-btn btn btn-default text-uppercase"> <i className="ti-angle-right"></i>
                                </button>

                                <div className="info"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="copyright_part">
            <div className="container">
                <div className="col text-center">
                    <p className="footer-text m-0 col-lg col-md-12">Copyright 2023 Medico All rights reserved </p>
                    <p className='footer-text m-0 col-lg col-md-12'>This template is made with 
                        <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer