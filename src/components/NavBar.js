import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBadge from './CartBadge'

function NavBar() {
  return (
   <nav className="navbar">
    <NavLink className="nav-link" to="/aboutus" >About Us</NavLink>
    <NavLink className="nav-link" to="/sales" >Sales</NavLink>
    <NavLink className="nav-link" to="/productpage" >Products</NavLink>
    <CartBadge />
   </nav>
  )
}

export default NavBar