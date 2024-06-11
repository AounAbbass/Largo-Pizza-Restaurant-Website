import React, { useContext } from 'react'
import './Style/MenuCategory.css'
import { MenuContext } from '../context/MenuContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/item/Items'

const MenuCategory = (props) => {
  const { all_product } = useContext(MenuContext);

  console.log("New All Products Here:", all_product)
  return (
    <div className="menu-Category">
      <img className='menuCategory-banner' src={props.banner} alt='' />
      <div className='menuCategory-indexSort'>
        <p>
          <span>Showing 1-5</span> out of 5 Deals
        </p>
      <div className="menuCategory-sort">
        Sort by <img src={dropdown_icon} alt='' />
      </div>
      </div>
      <div className='menuCategory-products'>
        {all_product.map((item, i)=>{
       console.log(item)
        if (props.category===item.category) {
          return <Items key={i} id={item.id} name={item.name} description1={item.description1} price1={item.price1} description2={item.description2} price2={item.price2} description3={item.description3} price3={item.price3} description4={item.description4}  price4={item.price4} image={item.image}/>
        
        }
        else {
          return null;
        }
        })}
      </div>
    </div>
  )
}

export default MenuCategory