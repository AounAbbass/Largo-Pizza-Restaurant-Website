import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product';


export const MenuContext = createContext(null);

const MenuContextProvider = (props) => {

    const getDefaultCart = ()=>{
        let cart = {};
        for(let i=0; i < all_product.length+1; i++) {
            cart[i] = 0;
        }
        return cart;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const contextValue = { all_product, cartItems, removeFromCart, addToCart};

    return (
        <MenuContext.Provider value={contextValue}>
            {props.children}
        </MenuContext.Provider>
    )

}

export default MenuContextProvider;