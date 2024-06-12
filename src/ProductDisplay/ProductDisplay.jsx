import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Components/Assets/star_icon.png"
import star_dull_icon from "../Components/Assets/star_dull_icon.png"

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay-Left">
        <div className="ProductDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="ProductDisplay-img">
          <img className='ProductDisplay-main-img' src={product.image} />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay-right-star">
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(220)</p>
        </div>
        <div className="ProductDisplay-right-prices">
          <div className="ProductDisplay-right-price-1">${product.price1}</div>
          <div className="ProductDisplay-right-price-1">${product.price2}</div>
          <div className="ProductDisplay-right-price-1">${product.price3}</div>
          <div className="ProductDisplay-right-price-1">${product.price4}</div>
        </div>
        <div className="ProductDisplay-right-description">
          <p>Any 2 Pizzas for the Price of One!</p>
        </div>
        <div className="ProductDisplay-right-size">
          <h1>Select Size</h1>
          <div className="ProductDisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className='ProductDisplay-right-category'><span>Category: </span>Deals, Pizza, {product.name}</p>
        <p className='ProductDisplay-right-category'><span>Tags: </span>Deals, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay