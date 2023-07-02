import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <div className='navbar'>
      {/* ====================NAV=========================== */}
        <div className='navContainer'>
          <span className="logo">MUST Booking Project</span>
          <div className="navItems">
            <FontAwesomeIcon icon={faBars} className="btnMenu" /> 

            <a className='navButton' href="index-1.html">Signup</a>
            <a className='navButton' href="indexlogin.html">Login</a>
            
          </div>
        </div>
    </div>
  )
}

export default Navbar