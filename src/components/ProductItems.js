import React from 'react'
import { Link } from 'react-router-dom';

function ProductItems({ product }) {


  return (
    <div>
        <img src={product.image} alt=""></img>
                <h3>{product.title}</h3>
                <h4>{product.original_price}</h4>
                <Link to={`product/${product.id}`}> View details</Link>
    </div>
  )
}

export default ProductItems