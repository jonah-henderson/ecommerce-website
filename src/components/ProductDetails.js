import React from 'react'
import { useLoaderData } from 'react-router';

import './ProductDetails.css';
import AddToCart from './AddToCart';

export function loadProduct({params}){
    return fetch(`/products/${params.id}`) // e.g products/1 
        .then(res => res.json()) //gives us the data back in json form
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function ProductDetails({ detail }) {
    const product = useLoaderData(); //whatever data you get back from the loader I set is what I want in the variable. React hook
  return (
    <div className='product-details-content'>
        <img src={product.image} />
        <div className='product-text'>
          <h1>{product.title}</h1>
          <h2>{formatter.format(product.original_price)}</h2>
          <p>{product.detail}</p>
          <AddToCart product={product}/>
        </div>
    </div>
  )
}

export default ProductDetails