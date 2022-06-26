import React, { useState } from 'react';
import { Outlet, NavLink, Link } from "react-router-dom";

import { RiCloseLine } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';
import '../styles/Navbar.css'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <>
    <div className="navbar">
      <div className="navbar-links">

      <section className='navbar-section'>
          <div className="navbar-links_logo">
            <img src='/assets/shared/logo.svg' alt='' style={{width:'36px', height:'36px'}}/>
          </div>

          <div className='line'>
              <span>___________________________________________________________________</span>
          </div> 

          <div className="navbar-links_container">
              <p><NavLink to="/">00 HOME</NavLink></p>
              <p><NavLink to="/destination">01 DESTINATION</NavLink></p>
              <p><NavLink to="/pilot">02 CREW</NavLink></p>
              <p><NavLink to="/vehicle">03 TECHNOLOGY</NavLink></p>
          </div>
      </section>
    </div>
      

      <div className="navbar-menu" style={{marginTop:'-18px'}}>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)} />
          : <AiOutlineMenu color="#fff" size={30} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><Link to="/">HOME</Link></p>
            <p><Link to="/destination">DESTINATION</Link></p>
            <p><Link to="/pilot">CREW</Link></p>
            <p><Link to="/vehicle">TECHNOLOGY</Link></p>
          </div>
        </div>
        )}
      </div>
    </div>
    <Outlet />
  </>
  );
};

export default Navbar;

