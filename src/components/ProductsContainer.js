import React, { useState, useEffect } from 'react'

function ProductsContainer() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

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

    // function handleFilter(e){
    //     e.preventDefault();
    //     setFilteredProducts(e.target.value)
    // }

    // const filteredP = products.filter(filteredProduct => filteredProduct.category.toLowerCase().includes(filteredProducts))

  return (
    <div>
        <h1>ProductsContainer</h1>
        <select  onChange={handleFilter} >
            <option value="Books">Books</option>
            <option value="Clothes and Shoes">Clothes & Shoes</option>
            </select>
            {filteredProducts.map(product => 
            <div key={product.id}>
                <h3>{product.category}</h3>
                <h3>{product.title}</h3>
            </div>)}
    </div>
  )
}

export default ProductsContainer