import React from 'react'
import {NavLink} from 'react-router-dom'
import Main from './Main'
import about from './About'


const Home= ()=>
 {

    return( <div className="main">
    <Main/>
        <center>
        <br/>
          <h1 className="site-heading">Hello,  I'm" <strong className="intro">MASHUM</strong> </h1>  
        <br/> 
        <p> A Frontend Developer and Design a web page.</p>
        <br/>
       <NavLink className= "btn btn_about" to="/about">MORE ON ME</NavLink> 
        </center>

       
             </div>
    )
    
}
export default  Home