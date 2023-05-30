import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
   <nav>
    <NavLink to="/aboutus" >About Us</NavLink>
    <NavLink to="/sales" >Sales</NavLink>
    <NavLink to="/productpage" >Products</NavLink>
   </nav>
  )
}

export default NavBar