import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../Components/Assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const {product} = props;
    console.log(product)
  return (
    <div className="breadcrumb">
        HOME <img src={arrow_icon} alt='' /> MENU <img src={arrow_icon} alt='' /> {product.category} <img src={arrow_icon} alt='' />{product.name}
    </div>
  )
}

export default Breadcrumbs