import React from 'react'
import Main from './Main'
import { NavLink,Link } from 'react-router-dom'



const Contact = () => {
    

    return (<div className="Contact_Page">
        <Main />
        <div className="row form-detail">
            <div className="col col-md-6 contact_detail ">
                <center>
                    <h2 style={{ "color": "white" }}>CONTACT DETAILS</h2>

                    <br />
                    <div className="contact_social_icon" style={{"line-height": "55px"}}>
                        <i class='far fa-user'>&nbsp; &nbsp; Mohd Mashum</i>
                        <br />
                        <i class='fas fa-home'>&nbsp;&nbsp; Haldoni,Greater Noida-201306</i>
                        <br />
                        <i class='fas fa-phone-square-alt'>&nbsp;&nbsp; +91-8792859312</i>
                        <br />
                        
                <a href={"mailto:r.mashum@gmail.com?subject=Mail from Our Site"} target="_top"><i className='fa fa-envelope'>&nbsp;&nbsp;<u style={{"color":"#fff"}}>r.mashum@gmail.com</u></i></a>
                    </div>
                    <Link to={"//linkedin.com/in/md-mashum-ansari-957370129"} className="linkedin" target="_blank"><i class="fa fa-linkedin"></i></Link>
                    <Link to={"//web.skype.com/"} className="skype" target="_blank"><i className="fa fa-skype" ></i></Link>
                    <Link to={"//www.facebook.com/mohd.mashum/"} className="facebook" target="_blank"><i className="fa fa-facebook" ></i></Link>



                </center>
            </div>

            <div className="col col-md-6">
                <center className="Contact_Line"><strong style={{ "font-size": "42px" }}>Say Hello</strong>
                    <p >If you have any question, please get in touch via contact form.</p>
                    <hr style={{ "margin-top": "10px" }} />


                    <form id="contact-form"  method="POST">

                    <div className="row contact_form_heading" id="message_form" style={{ "margin-right": "-15px", "margin-left": "-15px" }}>
                        <div className="form-group col-sm-6">
                            <input text="Name" placeholder="Name" className="form-control" required="required" />
                        </div>
                        <div className="form-group col-sm-6">
                            <input text="Email" placeholder="email@abcd.com" className="form-control" required="required" />
                        </div>
                        <div className="form-group col-sm-12">
                            <input text="Subject" placeholder="Subject" className="form-control" required="required" />
                        </div>
                        <div class="form-group col-md-12">
                            <textarea rows="10" cols="30" name="message" className="form-control" placeholder="Your Message" id="message" required="required" />
                        </div>
                    </div>
                    <div className="actions">
                        <input type="submit" value="SEND MESSAGE" name="submit" className="btn btn-lg btn-contact-bg" title="Submit Your Message!" />
                    </div>
                    </form>
                </center>
            </div>
        </div>
    </div>

    )

}
export default Contact