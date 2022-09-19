import React from 'react'
import { Link, BrowserRouter, NavLink } from 'react-router-dom';
import logo from '../image/romey.png';



const Main = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="col-sm-4">
    <Link className="navbar-brand" to="/"><h2 style={{"display": "table-footer-group"}} className="logoName">ᗰᗩᔕᕼᑌᗰ</h2></Link>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto  col-sm-8">
        
        <li className="nav-item">
             <NavLink className="nav-link" exact to="/" activeClassName="main-nav-active"> Home</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link"  exact to="/about" activeClassName="main-nav-active">About</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link"  exact to="/service" activeClassName="main-nav-active">Service</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" exact to="/portfolio" activeClassName="main-nav-active">Portfolio</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" exact to="/resume" activeClassName="main-nav-active">Resume</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" exact to="/contact" activeClassName="main-nav-active">Contact</NavLink>
           </li>

      </ul>
     
    </div>
  </nav>
 

  )
}
export default Main

