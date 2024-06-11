import React, {useContext} from 'react' 
import {MenuContext} from '../context/MenuContext'
import { useParams } from 'react-router-dom'


const Products = () => {

const {all_product}= useContext(MenuContext);
const {productId} = useParams;
const Products = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>

    </div>
  )
}

export default Products