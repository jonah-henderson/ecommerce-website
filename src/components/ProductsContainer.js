import React, { useState, useEffect } from 'react'
import Sales from './Sales';
import ProductItems from './ProductItems';

function ProductsContainer() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("Books")
    // const [originalPrice, setOriginalPrice] = useState("")

   useEffect(()=>{
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
   }, []);
    
function handleFilter(e){
    setCategory(e.target.value)
}

function getFilteredProducts(){
    return products.filter(product => product.category.toLowerCase() === category);
}


  return (
    <div>
        <h1>ProductsContainer</h1>
        <select  onChange={handleFilter} >
            <option value="Books">Books</option>
            <option value="Clothing">Clothes & Shoes</option>
            </select>
            {/* {getFilteredProducts().map(product => 
            <div key={product.id}>
                <img src={product.image} alt=""></img>
                <h3>{product.title}</h3>
                <h4>{product.original_price}</h4>
            </div>)} */}
            {getFilteredProducts().map(product => <ProductItems key={product.id} product={product} />)}
        {getFilteredProducts().map(product =>  <Sales discountedproduct={product} 
           originalPrice={product.original_price} key={product.id}/>)}
    </div>
  )
}

export default ProductsContainer