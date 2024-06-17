import React, { useContext, useEffect, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { MenuContext } from '../../context/MenuContext'

const ProductDisplay = (props) => {
  const { product } = props;
  console.log("Product here is: ", product)

  const { addToCart } = useContext(MenuContext);
  const [showPrice, setShowPrice] = useState(null);

  useEffect(() => {
    // This effect will run whenever showPrice changes
  }, [showPrice]);

  const handleClick = (val) => {
    setShowPrice(val);
  };


  return (
    <div className="ProductDisplay">

      <div className="ProductDisplay-img">
        <img className='ProductDisplay-main-img' src={product.image} />
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
          {showPrice === 1 && (
            <div className="ProductDisplay-right-price-1">{product.price1}</div>
          )}
          {showPrice === 2 && (
            <div className="ProductDisplay-right-price-1">{product.price2}</div>
          )}
          {showPrice === 3 && (
            <div className="ProductDisplay-right-price-1">{product.price3}</div>
          )}
          {showPrice === 4 && (
            <div className="ProductDisplay-right-price-1">{product.price4}</div>
          )}
        </div>
        <div className="ProductDisplay-right-description">
          <p>Any 2 Pizzas for the Price of One!</p>
        </div>
        <div className="ProductDisplay-right-size1">
          <h1>Select Size</h1>
          <div className="ProductDisplay-right-size">
            <div onClick={() => handleClick(1)}>S</div>
            <div onClick={() => handleClick(2)}>M</div>
            <div onClick={() => handleClick(3)}>L</div>
            <div onClick={() => handleClick(4)}>XL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className='ProductDisplay-right-category'><span>Category: </span>Deals, Pizza, {product.name}</p>
        <p className='ProductDisplay-right-category'><span>Tags: </span>Deals, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay