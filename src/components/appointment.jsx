import React from 'react'

const Appointment = () => {
  return (
    <section className="regervation_part section_padding">
        <div className="container">
            <div className="row align-items-center regervation_content">
                <div className="col-lg-7">
                    <div className="regervation_part_iner">
                        <form>
                            <h2>Make an Appointment</h2>
                            <div className="row">
                                <div className="form-group col-md-6" >
                                    <input type="Name" className="form-control" id="inputEmail" placeholder="Name" />
                                </div>
                                <div className="form-group col-md-6">
                                        <select className="form-control" id="Select" style={{background : 'teal', opacity : '0.8' }}>
                                            <option value="" selected>Select Doctor</option>
                                            <option value="1">Dr.Akiyo Fidel</option>
                                            <option value="2">Dr.Kiberu Ashirafu</option>
                                            <option value="3">Dr.Mathias Lubega</option>
                                        </select>
                                    </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="inputtel"
                                        placeholder="+256" style={{background : 'teal', opacity : '0.8' }} />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="inputemail"
                                        placeholder="Email Address" style={{background : 'teal', opacity : '0.8' }} />
                                </div>
                                <div className="form-group col-md-6">
                                    <select className="form-control" id="Select" style={{background : 'teal', opacity : '0.8' }}>
                                        <option value="1" selected>Select service</option>
                                        <option value="2">Peadiatrics</option>
                                        <option value="3">Reproductive Health</option>
                                        <option value="4">HIV Care</option>
                                        <option value="5">Dermatology</option>
                                        <option value="6">Surgery</option>
                                        <option value="7">ENT</option>
                                        <option value="7">General</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                        <input type="date" className="form-control" style={{background : 'teal', opacity : '0.8' }}/>
                                </div>
                                <div className="form-group time_icon col-md-6">
                                    <select className="form-control" id="Select2" style={{background : 'teal', opacity : '0.8' }}>
                                        <option value="" selected>Time</option>
                                        <option value="1">8 AM TO 10AM</option>
                                        <option value="1">10 AM TO 12PM</option>
                                        <option value="1">12PM TO 2PM</option>
                                        <option value="1">2PM TO 4PM</option>
                                        <option value="1">4PM TO 6PM</option>
                                        <option value="1">6PM TO 8PM</option>
                                        <option value="1">4PM TO 10PM</option>
                                        <option value="1">10PM TO 12PM</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea className="form-control" id="Textarea" type="text" rows="4"
                                        placeholder="Your Note "/>
                                </div>
                            </div>
                            <div className="regerv_btn">
                            <button className="btn btn-lg btn_2" type='submit'>Make an appointment</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <div className="reservation_img">
                        {/* <img src="assets/img/reservation.png" alt="" className="reservation_img_iner"/> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Appointment