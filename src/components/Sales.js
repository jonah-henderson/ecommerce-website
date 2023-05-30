import React from 'react'

function Sales({discountedproduct, originalPrice}) {
  return (
    <div>
        {originalPrice ? (
        <h3>Original Price: {originalPrice}</h3>
      ) : (
        <h3>Original Price: N/A</h3>
      )}
    </div>
  )
}

export default Sales