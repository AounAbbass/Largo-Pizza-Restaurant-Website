import React from 'react'
import './Subscribe.css'

const PizzaSubsribe = () => {
  return (
    <div className="subscribe">
      <h1>New Pizza Offers Straight to Your Email</h1>
      <p>Become a Pizza Addict and Stay Updated</p>

      <div>
        <input type="email" placeholder='Enter Your Email' />
        <button>Get Addicted</button>
      </div>
    </div>
  )
}

export default PizzaSubsribe