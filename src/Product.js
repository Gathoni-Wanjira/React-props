import React from 'react'
import ItemDescription from './ItemDescription'

function Product({name , description, price}) {
  return (
//    Consume the product properties from App.js
// Props destructuring occurs when we use the properties entries as parameters instead of generalizing all of them as just 'props'.
    <div>

        <ItemDescription name= {name} description={description}/>
        <h3>${price}</h3>
        
    </div>

  )
}

export default Product