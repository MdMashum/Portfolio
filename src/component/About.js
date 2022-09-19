import React from 'react'
import Main from './Main'
import { NavLink } from 'react-router-dom'



const About = () => {

    return (


        <div>
            <div className="about_page">
                <Main />

                <div className="About_SubHeadline">

                    <div >
                        <h2 style={{ "textAlign": "center", "color": "#ffffff" }}>About <strong style={{ "color": "yellowgreen" }}>ME</strong></h2>
                        <hr />
                    </div>

                    <p className="line_one">I'm a gobal based web designer and front-end developer focused on clean & user-friendly experiences, I am passionate about building excellent Websites that improves the lives of those around me.
                    </p>

                    <p className="line_one"> With 2.8 years of experience as a  Software developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step while working..</p>
                    <br />
                    <center>
                        <a href="/Mashum.pdf" className="btn btn-primary ml-4 btn-downd" download>Download CV</a>
                        

                    </center>
                </div>

            </div>
        </div>

    )

}
export default About
