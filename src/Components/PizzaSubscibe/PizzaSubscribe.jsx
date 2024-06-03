import React from 'react'
import './PizzaSubscribe.css'

const PizzaSubsribe = () => {
  return (
    <div className="subscribe=card">
      <h1>Get Latest Pizza Deals Straight on to Your Email</h1>
      <p>Become a Pizza Addict and Stay Updated</p>

      <div>
        <input type="email" placeholder='Enter Your Email' />
        <button>Get Addicted</button>
      </div>
    </div>
  )
}

export default PizzaSubsribe