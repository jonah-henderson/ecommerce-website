import React from 'react'
import { Link } from 'react-router-dom'

import './CartBadge.css';

export default function CartBadge() {

  /* TODO: get from shopping cart context instead */
  const items = 3;
  // const items = cart.productsInCart.length;

  return (
    <Link to='/checkout'>
        <div className='cart-badge'>
            <span className="material-symbols-outlined">shopping_cart</span>
            {items > 0 && <div className="cart-badge-item-count">{items}</div>}
        </div>
    </Link>
  )
}
