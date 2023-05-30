import React from 'react'

function Sales({OriginalPrice, DiscountedPrice}) {
  return (
    <div>
        <h3>Original Price: {OriginalPrice} </h3>
        <h1>Discounted Price: {DiscountedPrice}</h1>
    </div>
  )
}

export default Sales