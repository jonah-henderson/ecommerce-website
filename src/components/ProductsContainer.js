import React, { useState, useEffect } from 'react'
import Sales from './Sales';

function ProductsContainer() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    // const [originalPrice, setOriginalPrice] = useState("")

   useEffect(()=>{
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => {
        setProducts(data);
        setFilteredProducts(data);
    })
   }, []);
    
function handleFilter(e){
    const value = e.target.value;
    const filtered = products.filter(product => product.category.toLowerCase()
    .includes(value.toLowerCase())
    );
    setFilteredProducts(filtered)
}

// function handlePrice(e){
//     setOriginalPrice(e.target.value)
// }

  return (
    <div>
        <h1>ProductsContainer</h1>
        <select  onChange={handleFilter} >
            <option value="Books">Books</option>
            <option value="Clothing">Clothes & Shoes</option>
            </select>
            {filteredProducts.map(product => 
            <div key={product.id}>
                <img src={product.image} alt=""></img>
                <h3>{product.title}</h3>
            </div>)}
        {filteredProducts.map(product =>  <Sales discountedproduct={product} 
           originalPrice={product.original_price} key={product.id}/>)}
    </div>
  )
}

export default ProductsContainer