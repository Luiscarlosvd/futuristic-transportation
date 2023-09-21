import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/vehicles">Vehicles List</NavLink>
      <NavLink to="/details">Vehicle Details</NavLink>
    </div>
  )
}

export default Navbar
