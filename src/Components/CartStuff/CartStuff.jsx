import React, { useContext } from 'react'
import './CartStuff.css'
import { MenuContext } from '../../context/MenuContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartStuff = () => {
    const { all_product, cartItems, removeFromCart } = useContext(MenuContext)
    console.log("Cart has:", cartItems);
    console.log("Product has:", all_product);
    return (
        <div className="cartstuff">
            <div className="cartstuff-format-main">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) 

                    {
                    return <div>
                          <div className="cartstuff-format cartstuff-format-main">
                            <img src={e.image} alt='' className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>{e.price1}</p>
                            <button className='cartstuff-quantity'>{cartItems[e.id]}</button>
                            <p>{e.price1*cartItems[e.id]}</p>
                            <img src={remove_icon} alt='' onClick={() => { removeFromCart(e.id) }} />
                        </div>
                        <hr />
                    </div>
                    }
                })}
        </div>
            )
        }

        export default CartStuff