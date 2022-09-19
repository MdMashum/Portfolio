import React, { Fragment,Component } from 'react'
import Main from './Main'
import {Link} from 'react-router-dom'

    

const Resume = ()=>

 {

    return( 
        <div className="resume-page">
        <Main/>
       <div className="container-fluid">
       <div className="row">
       <div className="col-sm-6 resume-text-a border-right">
       <h1 className="education"><u style={{"color":"#ffff","line-height":"1","font-family": "monospace"}}>Education</u></h1>
       <br/>
       <h4 className="scet" style={{"color":"#f0e68c"}}>SATYA COLLEGE OF ENGINEERING AND TECHNOLOGY</h4>
       <br/>
       <p className="unvt">  M.D.U,Rohtak | B-Tech ( Computer Science ) | Delhi Ncr, Haryana |  May 2010 - Sept 2014</p>
       
       </div>
       <div className="col-sm-6 resume-text-b">
       <h1 className="exp" ><u style={{"color":"#ffff","line-height":"1","font-family": "monospace"}}>Experience</u></h1>
       <br/>
       <h4 className="orgn" style={{"color":"#f0e68c"}}>SOURCE ONE MANAGEMENT PVT LTD</h4>
       <br/>
       <p className="org-add">  Software Engineer | BTM, Bangalore | 
       March 2015 - July 2016</p>
       </div>
       </div>       
       </div>
        </div>
    )
    
}
export default  Resume;

