import React, { useState } from 'react'
import ProductItems from './ProductItems';

function ProductsContainer() {
    const [filteredProducts, setFilteredProducts] = useState("")
    function handleFilter(e){
        e.preventDefault();
        setFilteredProducts(e.target.value)
    }

    const filteredP = filteredProducts.filter(filteredProduct => filteredProduct.category.includes(filteredProducts))

  return (
    <div>
        <h1>ProductsContainer</h1>
        <select  onChange={handleFilter} >
            <option value="books">Books</option>
            <opton value="clothes-and-shoes">Clothes & Shoes</opton>

            {filteredP.map(product => <ProductItems key={product.id} product={product} />)}

        </select>
    </div>
  )
}

export default ProductsContainer