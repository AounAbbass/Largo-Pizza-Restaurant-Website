import React, { useState } from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Items from '../item/Items'

const Popular = () => {
  //  const [pizza, setPizzaName] = useState("");

  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("The Pizza Name is Accepted!")
  //  }

  return (
    
    <div className='popular'>
      <h1>POPULAR IN PIZZA </h1>
      <hr />
      < div className='popular-item'>

      {data_product.map((item, i)=>{
        return <Items key={i} id={item.id} name={item.name} image={item.image} />
      })}
      </div>
      {/* <form onSubmit={handleSubmit}>
    <div className='form'>
      <input type="string" label="Enter Pizza Name" value={pizza} onChange={e => setPizzaName(e.target.value)}>
      </input>
    </div>
    </form> */}
    </div>

  )
}

export default Popular