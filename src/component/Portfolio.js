import React, { useState } from 'react'
import Main from './Main'
import {Link, Route, NavLink} from 'react-router-dom'

import logo from '../image/portfoliogallery.jpg';
import logo1 from '../image/portfoliogallery1.jpg';
import logo2 from '../image/portfoliogallery2.jpg';

const Portfolio= ()=>
 {
  
  
    return( <div className="portfolio-page">
        <Main/>
       
        <center>
        <h1 style={{"font-size":"32px","color":"#eee8aa"}}>Portfolio</h1>
        <hr/>
        </center>
         <br/>
        <div class="timeline">

        <div class="container right">
        <div class="content">
          <h2>March 2022 - Present</h2>
          <b>Organization:</b> <p>FunctionUp (Bootcamp)</p>
          <b>Project</b><p> College Interns  <Link to ={"https://github.com/MdMashum/Internship_Project"} target="_blank"><i style={{"font-size":"20px"}}className="fa">&#xf0c1;</i></Link></p>
          <p> College Interns  <Link to ={"https://github.com/MdMashum/Internship_Project"} target="_blank"><i style={{"font-size":"20px"}}className="fa">&#xf0c1;</i></Link></p>
          <p> Url Shortner  <Link to ={"https://github.com/MdMashum/project4-shorter-url/tree/project/urlShortnerGroup68"} target="_blank"><i style={{"font-size":"20px"}}className="fa">&#xf0c1;</i></Link></p>
          <p> Books Management  <Link to ={"https://github.com/MdMashum/BookManagementAndReview/tree/BookManagement"} target="_blank"><i style={{"font-size":"20px"}}className="fa">&#xf0c1;</i></Link></p>
          <p> Blogging sites  <Link to ={"https://github.com/MdMashum/Blogging-Sites/tree/Final-Code-of-Blogging"} target="_blank"><i style={{"font-size":"20px"}}className="fa">&#xf0c1;</i></Link></p>
          <p> Shopping Cart(  <Link to ={"https://github.com/MdMashum/ShoppingCart/tree/Product-Management"} target="_blank"><i style={{"font-size":"20px"}}className="fa">&#xf0c1;</i></Link></p>
          
          <p>Duration: 8 Month</p>
          <b>Description</b> <p> HelloDeliveri is use for the delivery service product. And contact for the delivery service any of them for the requirement </p>
          <b>Skill</b>  <p>
           Web Technologies: React js,Bootstrap4,3,CSS3
           Scripting: Java Script, Api Service.
           Operating Systems: Window 10.
          </p>
        </div>
      </div>
        <div class="container left">
        <div class="content">
          <h2>May 2022</h2>
          <b>Portfolio:</b> <p>In reactJs</p>
          <b>Project</b><p> www.mashum.com   <Link to ={"//www.mashum.com/"} target="_blank"><i style={{"font-size":"20px"}}className="fa">&#xf0c1;</i></Link>
          </p>
          
          <p>Duration: 2 Month</p>
          <b>Description</b> <p>It is developed by React js.Basically use for the professional introduction to me with the help of website. </p>
          <b>Skill</b>  <p>
           Web Technologies: React js, Bootstrap4,3,CSS3
           Scripting: Java Script 
           Operating Systems: Window 10.
          </p>
        </div>
      </div>
      
      <div class="container right">
      <div class="content">
        <h2>2020-2021</h2>
        <b>Organization:</b> <p>HelloDeliveri</p>
        <b>Project</b><p> www.hellodeliveri.com   <Link to ={"//www.hellodelivery.com/"} target="_blank"><i style={{"font-size":"20px"}}className="fa">&#xf0c1;</i></Link>
        </p>
        
        <p>Duration: 8 Month</p>
        <b>Description</b> <p> HelloDeliveri is use for the delivery service product. And contact for the delivery service any of them for the requirement </p>
        <b>Skill</b>  <p>
         Web Technologies: React js,Bootstrap4,3,CSS3
         Scripting: Java Script, Api Service.
         Operating Systems: Window 10.
        </p>
      </div>
    </div>
    
        <div class="container left">
        <div class="content">
          <h2>2016</h2>
          <b>Organization:</b> <p>Source One Management Private Limited</p>
          <b>Project</b><p> HiringNow.com   <Link to ={"//www.hiringnow.com/"} target="_blank"><i style={{"font-size":"20px"}}className="fa">&#xf0c1;</i></Link>
          </p>
          
          <p>Duration: 4 Month</p>
          <b>Description</b> <p>HiringNow is a jobportal site.Contextual Jobs Search-write sentences, keywords, designations, primary skills and anything related to jobs. </p>
          <b>Skill</b>  <p>
           Web Technologies: HTML4, CSS
           Scripting: Java Script 
           Operating Systems: Ubuntu
          </p>
        </div>
      </div>

        <div class="container right">
        <div class="content">
        <h2>2015</h2>
        <b>Organization:</b> <p>Source One Management Private Limited</p>
        <b>Project</b><p> ParserOne   <Link to ={"//www.parserone.com/admin"} target="_blank"><i  className="fa">&#xf0c1;</i>
        </Link>
        </p>
        
        <p>Duration: 3 Month</p>
        <b>Description</b> <p>
        ParseOne is an intelligent tool for searching and parsing resume in your local systems and e-mail cllients.With proper configuration one can upload candidates resume and parsing details automatically to Hiring Now </p>
        <b>Skill</b>  <p>
         Web Technologies: HTML, CSS
         Scripting: Java Script 
         Operating Systems: Ubuntu
        </p>
       </div>
        </div>
        </div>
      </div>
      
    )
    
}
export default  Portfolio

