import React from 'react'

function ProductItems({ product }) {
  return (
    <div>
        <img src={product.image} alt=""></img>
                <h3>{product.title}</h3>
                <h4>{product.original_price}</h4>
    </div>
  )
}

export default ProductItems