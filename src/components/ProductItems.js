import React from 'react'

function ProductItems({ product }) {
  return (
    <div>
      <h3>{product.category}</h3>
      <h3>{product.title}</h3>
    </div>
  )
}

export default ProductItems