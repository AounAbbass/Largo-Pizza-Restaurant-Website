import React from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>LargoPizza</p>
      </div>
      <ul className='nav-menu'>
        <li>Menu <hr /></li>
        <li>Deals</li>
        <li>Contact Us</li>
        <li>My Account</li>
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
