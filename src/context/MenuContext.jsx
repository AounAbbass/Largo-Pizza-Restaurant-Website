import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product';

export const MenuContext = createContext(null);

const MenuContextProvider = (props) => {

    const contextValue = { all_product };

    return (
        <MenuContext.Provider value={contextValue}>
            {props.children}
        </MenuContext.Provider>
    )

}

export default MenuContextProvider;