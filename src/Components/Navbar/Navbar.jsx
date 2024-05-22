import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar= () => {

const [menu, setMenu] = useState("menu");

  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>LargoPizza</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("menu")}}><Link style={{textDecoration: 'none'}} to='/'>Menu</Link>{menu==="menu"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("deals")}}><Link style={{textDecoration: 'none'}}to='/deals'>Deals</Link>{menu==="deals"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration: 'none'}}to='/contact'>Contact Us</Link>{menu==="contact"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='' /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
}

export default Navbar;
