import React from 'react'
import { useLoaderData } from 'react-router';


export function loadProduct({params}){
    return fetch(`/products/${params.id}`) // e.g products/1 
        .then(res => res.json()) //gives us the data back in json form
}



function ProductDetails({ detail }) {
    const product = useLoaderData(); //whatever data you get back from the loader I set is what I want in the variable. React hook
  return (
    <div>
        <h3>{product.detail}</h3>
    </div>
  )
}

export default ProductDetails