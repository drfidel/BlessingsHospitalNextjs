import React from 'react'

const AboutUs = () => {
  return (
    <section className="about_us padding_top">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-lg-6">
                    <div className="about_us_img">
                        <img src="assets/img/top_service.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="about_us_text">
                        <h2>About us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra
                            maecenas accumsan lacus vel</p>
                       <div className="banner_item">
                            <div className=""><a className="btn_2 " href="/about">learn more</a></div>
                            <div className="" ><a className="btn_2 " href="/complaint">Report Complaint</a></div>
                       </div>
                        <div className="banner_item">
                            <div className="single_item">
                                <img src="assets/img/icon/banner_1.svg" alt=""/>
                                <h5>Emergency</h5>
                            </div>
                            <div className="single_item">
                                <img src="assets/img/icon/banner_2.svg" alt=""/>
                                <h5>Appointment</h5>
                            </div>
                            <div className="single_item">
                                <img src="assets/img/icon/banner_3.svg" alt=""/>
                                <h5>Qualfied</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs