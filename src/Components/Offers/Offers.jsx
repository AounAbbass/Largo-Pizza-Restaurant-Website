import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'


const Offers = () => {
  return (
    <div className='offers'>
     <div className="offers-left">
      <h1>Latest Deals</h1>
      <h2>Best Pizza Offers</h2>
      <p>MOUTH-WATERING PIZZA PICKS!</p>
      <button>Check Now</button>
     </div>
     <div className="offers-right">
      <img src={exclusive_image} alt='Girl Eating Pizza in Car' />
     </div>
    </div>
  )
}

export default Offers