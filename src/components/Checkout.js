import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router';

import './Checkout.css';

export default function Checkout() {

    const navigate = useNavigate();
    let [cartContents, setCartContents] = useState([]);

    /* TODO: load the cart context */
    // const cartContext = ?;

    useEffect(() => {
        // const productIds = cartContext.productsInCart;

        /* TODO: map the productIds from the cart to requests to the Spring Boot server */
        // const promises = productIds.map(id => fetch(...));

        // Promise.all(promises)
        //     .then(responses => {
        //         return Promise.all(responses.map(res => res.json()));
        //     })
        //     .then(data => setCartContents(data));

    }, [/* cartContext */]); // This effect depends on the cartContext, so we add it as a dependency here
    
    
    function removeProductFromCart(productId) {
        /* TODO: remove the product with this id from cart using the removeProductFromCart method */
        // cartContext.removeProductFromCart(...)
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const displayItems = cartContents.map(product => {
        return (<div className="checkout-product-row" key={product.id}>
            <img src={product.image}/>
            <p>{product.title}</p>
            <span className='spacer'></span>
            <p>{formatter.format(product.original_price)}</p>
            <button onClick={removeProductFromCart}>X</button>
        </div>);
    });

    /* TODO: calculate total from cartContents */
    const total = 73.99;
    // const total = cartContents.reduce((accumulated, next) => accumulated + next.original_price, 0);

    function placeOrder() {
        toast("Your order has been placed!", {
            onClose: () => {
                navigate('/');
                // TODO: Clear the cart using the clearCart() function
            }
        });
        /* TODO: POST new order to server */
    }

  return (
    <div className="checkout">
        <h1>Checkout</h1>
        <hr/>
        <div className="checkout-products-list">
            {displayItems}
        </div> 
        <hr/>
        <p>Total: <strong>{formatter.format(total)}</strong></p>
        {cartContents.length > 0 && <button onClick={placeOrder}>Place order</button>}
    </div>
  )
}
