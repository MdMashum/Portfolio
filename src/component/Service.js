import React from 'react'
import Main from './Main'

const Service = () => {



    return (
      
        <div className = "service-page" >
         
        <Main/>
        
       

        <div className="container-fluid text-center">
        <center > <h2 className="my"> My <strong style = {
            { "font-size": "48px", "color": "darkorange" }}> Services </strong></h2 > <hr style = {
            { "margin": "10px" }
        } /></center >

        
        <br/>

        
        <div className="row">
          <div className="col-sm-6 react">
            <i className = "fa fa-desktop fa-3x w3-margin-bottom w3-jumbo w3-center logo-small"> </i> <h4 className = "w3-large"> 
            <u> React Developer </u></h4>
        <h6> The React JS JavaScript library comes with a range of components </h6>
        <h6>that can be shared and reusable multiple times </h6> 
          </div>
          <div className="col-sm-6 web">
          <i className = "fa fa-globe fa-3x w3-margin-bottom w3-jumbo logo-small" > </i> <h4 className = "w3-large" >
          <u> Web Development </u></h4>
         <h6> <b> Great UI </b> : Our Designs have great UI</h6>
         <h6> <b> Seo Friendly </b>: Website are built with feature.</h6>
         <h6> <b> Clean Coding </b> : Coding is kept clean and optimised as per industry standard</h6>
          </div>
        </div>
        <br/><br/>
        <div className="row">
          <div className="col-sm-6 res">
          <i className = "fa fa-tablet fa-3x w3-margin-bottom w3-jumbo logo-small" > </i> 
          <h4 className = "w3-large"> <u> Responsive Web Page </u></h4>
          <h6> Our Design are device friendly accross all platform and screensize </h6>
          </div>
          <div className="col-sm-6 des">
          <i className = "fas fa-bezier-curve fa-3x w3-margin-bottom w3-jumbo logo-small"> </i> 
          <h4 className = "w3-large"> <u> Website Design </u></h4>
          <h6> A Single Page Applications(SPA) create a component with the help of React JS.</h6>
          <h6>A Single page applications loading faster and optimises the viewing experince
          for the user </h6> 
          </div>
        </div>
      </div>
      </div>
    
        
    )

}
export default Service