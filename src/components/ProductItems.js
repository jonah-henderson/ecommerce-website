import React from 'react'
import { Link } from 'react-router-dom';

import './ProductItem.css';
import AddToCart from './AddToCart';

function ProductItems({ product }) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <div className='product-item'>
        <img src={product.image} alt="" />
        <div className="card-details">
          <h1>{product.title}</h1>
          <h2>{formatter.format(product.original_price)}</h2>
          <Link to={`/product/${product.id}`}> View details</Link> | <AddToCart product={product}/>
        </div>
    </div>
  )
}

export default ProductItems
