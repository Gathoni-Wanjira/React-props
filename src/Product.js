import React from 'react'

function Product({name , description, price}) {
  return (
//    Consume the product properties from App.js
// Props destructuring occurs when we use the properties entries as parameters instead of generalizing all of them as just 'props'.
    <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>${price}</h3>
    </div>
  )
}

export default Product