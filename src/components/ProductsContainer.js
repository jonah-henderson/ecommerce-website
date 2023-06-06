import React, { useState, useEffect } from 'react'
import Sales from './Sales';
import ProductItems from './ProductItems';
import ProductDetails from './ProductDetails';

function ProductsContainer() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("Books")
    // const [originalPrice, setOriginalPrice] = useState("")

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
    console.log(products)
    console.log(category)
    return products.filter(product => product.category === category);
}


  return (
    <div>
        <h1>ProductsContainer</h1>
        <select  onChange={handleFilter} >
            <option value="Books">Books</option>
            <option value="Clothing and Shoes">Clothes & Shoes</option>
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

           {/* {products.map(detail => <ProductDetails key={detail.id} detail={detail}/>)} */}
    </div>
  )
}

export default ProductsContainer