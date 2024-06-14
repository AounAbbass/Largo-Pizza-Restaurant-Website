import React from 'react'
import './SimilarProducts.css'
import all_product from '../Assets/all_product'
import Items from '../item/Items'

const SimilarProducts = () => {
  return (
   <div className="similarproducts">
    <h1>Similar Products</h1>
    <hr />
    <div className="similarproducts-item">
    {all_product.map((item, i)=>{
        return <Items key={i} id={item.id} name={item.name} image={item.image} />
      })}
    </div>
   </div>
  )
}

export default SimilarProducts