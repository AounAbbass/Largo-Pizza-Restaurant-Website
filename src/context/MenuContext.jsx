import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product';
import data_product from '../Components/Assets/data';

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
    const contextValue = { all_product, cartItems};

    console.log(cartItems);


    return (
        <MenuContext.Provider value={contextValue}>
            {props.children}
        </MenuContext.Provider>
    )

}

export default MenuContextProvider;