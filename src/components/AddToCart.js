import React from 'react'
import { toast } from 'react-toastify'

export default function AddToCart({product}) {
    /* TODO: Get the shopping cart context from useContext() */
    function addToCart() {
        toast.dismiss();
        toast(`Added ${product.title} to your cart!`);

        /* TODO: use the addProductToCart(id) method from the context to add a product to the cart */
    }
  return (
    <button onClick={addToCart}>Add to cart</button>
  )
}
