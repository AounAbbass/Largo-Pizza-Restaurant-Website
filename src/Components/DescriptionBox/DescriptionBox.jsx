import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Reviews(450)</div>
        </div>
      <div className="descriptionbox-description">
        <p>This is an ecommerce webiste dedicated to Largo Pizza Ltd. It displays all the fast food company's products and deals.
          This website is being made to provide a means for Pizza Lovers in the state of Maryland to place
          their orders at the click of a button. 
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox