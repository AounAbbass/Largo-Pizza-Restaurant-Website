import React, { useEffect } from 'react';
import { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar= () => {

const [menu, setMenu] = useState(null);

useEffect(() => {
 setMenu()
},[])


  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <Link onClick={()=>{setMenu("home")}} className='nav-link' style={{textDecoration: 'none'}} to='/'>LargoPizza</Link>{menu==="home"&& <hr/>}
       
      </div>
      
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("menu")}}><Link style={{textDecoration: 'none'}} to='/Menu'>Menu</Link>{menu==="menu" && menu!=="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("deals")}}><Link style={{textDecoration: 'none'}}to='/deals'>Deals</Link>{menu==="deals"&& menu!=="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration: 'none'}}to='/contact'>Contact Us</Link>{menu==="contact"&& menu!=="home"?<hr/>:<></>}</li>
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
