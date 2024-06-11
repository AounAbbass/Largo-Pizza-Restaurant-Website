import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <div className='item-name'>
        <p>{props.name}</p>
      </div>
      <p>{props.description1}</p>
      <div className='item-price-1'>
          {props.price1}
        </div>
      <p>{props.description2}</p>
      <div className='item-price-1'>
          {props.price2}
        </div>
      <p>{props.description3}</p>
      <div className='item-price-1'>
          {props.price3}
        </div>
      <p>{props.description4}</p>

        <div className='item-price-1'>
          {props.price4}
        </div>
      </div>

  )
}

export default Items