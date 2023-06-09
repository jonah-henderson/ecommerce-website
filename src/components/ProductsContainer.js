import React, { useState, useEffect } from 'react'
import ProductItems from './ProductItems';

import './ProductsContainer.css';

function ProductsContainer() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("Books")

   useEffect(()=>{
    fetch('/products/all') //talking to our server side 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
    .then(data => setProducts(data))
   }, []);
    
function handleFilter(e){
    setCategory(e.target.value)
}

function getFilteredProducts(){
    return products.filter(product => product.category === category);
}

  return (
    <div className="products-container">
        <header>
            <h1>Find products</h1>
            <label>Category: </label>
            <select onChange={handleFilter} >
                <option value="Books">Books</option>
                <option value="Clothing and Shoes">Clothes & Shoes</option>
            </select>
        </header>
        <div className="product-list">
            {getFilteredProducts().map(product => <ProductItems key={product.id} product={product} />)}
        </div>
    </div>
  )
}

export default ProductsContainer
