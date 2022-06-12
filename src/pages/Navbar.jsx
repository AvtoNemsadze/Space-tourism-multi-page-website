import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import { RiCloseLine } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';
import '../components/Navbar.css'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
  <>
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src='/assets/shared/logo.svg' alt='' style={{width:'36px', height:'36px'}}/>
        </div>

         <div className='line'>
             <span>______________________________________________________________</span>
        </div> 
        <div className="navbar-links_container">
            <p><Link to="/">00 HOME</Link></p>
            <p><Link to="/destination">01 DESTINATION</Link></p>
            <p><Link to="/crew">02 CREW</Link></p>
            <p><Link to="/technology">03 TECHNOLOGY</Link></p>
        </div>
      </div>
      <div className="navbar-menu" style={{marginTop:'-18px'}}>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <AiOutlineMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><Link to="/">HOME</Link></p>
            <p><Link to="/destination">DESTINATION</Link></p>
            <p><Link to="/crew">CREW</Link></p>
            <p><Link to="/technology">TECHNOLOGY</Link></p>
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

