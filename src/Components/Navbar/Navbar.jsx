import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar= () => {

const [menu, setMenu] = useState("menu");

  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>LargoPizza</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("menu")}}>Menu{menu==="menu"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("deals")}}>Deals{menu==="deals"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}}>Contact Us{menu==="contact"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("account")}}>My Account{menu==="account"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt='' />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
}

export default Navbar;
