import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import bell_icon from '../Assets/bell-icon.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
           <h2>HOTTEST DEALS IN TOWN!</h2>
           <div>
            <div className="hero-bell-icon">
                <p>BEST</p>
                <img src={bell_icon} alt='' />
            </div>
            <p>DISCOUNTS</p>
            <p>FOR ALL PIZZA-LOVERS</p>
           </div>
           <div className="hero-latest-btn">
            <div>LATEST DISCOUNTS</div>
            <img src={arrow_icon} alt='' />
           </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt='' />
            </div>
    </div>
  )
}

export default Hero