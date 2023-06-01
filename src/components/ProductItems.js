import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductItems({ product }) {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/product/$product.id')
    }


  return (
    <div>
        <img src={product.image} alt=""></img>
                <h3>{product.title}</h3>
                <h4>{product.original_price}</h4>
                <button onClick={handleClick}>View Details</button>
    </div>
  )
}

export default ProductItems