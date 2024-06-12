import React, {useContext} from 'react' 
import {MenuContext} from '../context/MenuContext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../ProductDisplay/ProductDisplay';


const Product = () => {

const {all_product}= useContext(MenuContext);
console.log(all_product)
const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number(productId));
console.log("Product Id Here: ", product)
  return (
    <div>
     <Breadcrumbs product={product}/>
     <ProductDisplay product={product}/>
    </div>
  )
}

export default Product