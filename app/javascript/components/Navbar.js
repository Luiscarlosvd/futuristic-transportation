import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className='bg-slate-600'>
    <h1>Navbar</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/vehicles">Vehicles List</NavLink>
    <NavLink to="/details/id">Vehicle Details</NavLink>
    <NavLink to="/my-reservations">My Reservations</NavLink>
    <NavLink to="/reserve">Reserve</NavLink>
    <NavLink to="details/id/reserve">Reserve Specific</NavLink>
    <NavLink to="log-in">Login </NavLink>
    <NavLink to="sign-up">Signup</NavLink>
    <NavLink to="vehicles/new">Add a Vehicle</NavLink>
    <NavLink to="vehicles/delete">Delete a Vehicle</NavLink>
  </div>
);

export default Navbar;
