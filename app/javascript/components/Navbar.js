import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-no-back.png';
import { HiMenuAlt4 } from 'react-icons/hi'

const Navbar = () => (
  <div className="bg-white fixed h-screen flex flex-col justify-start z-50 w-60">
    <HiMenuAlt4 className='text-slate-800 fixed left-3 top-3  text-3xl cursor-pointer' />
    <img src={logo} className='w-2/3 mx-auto' />
    <div className='flex flex-col font-ace ml-2 text-slate-800 font-bold navigation'>
      <NavLink className='px-2 py-1' to="/">HOME</NavLink>
      <NavLink className='px-2 py-1' to="/vehicles">VEHICLES LIST</NavLink>
      <NavLink className='px-2 py-1' to="/details/id">VEHICLE DETAILS</NavLink>
      <NavLink className='px-2 py-1' to="/my-reservations">MY RESERVATIONS</NavLink>
      <NavLink className='px-2 py-1' to="/reserve">RESERVE</NavLink>
      <NavLink className='px-2 py-1' to="details/id/reserve">RESERVE SPECIFIC</NavLink>
      <NavLink className='px-2 py-1' to="log-in">LOGIN </NavLink>
      <NavLink className='px-2 py-1' to="sign-up">SIGNUP</NavLink>
      <NavLink className='px-2 py-1' to="vehicles/new">ADD VEHICLE</NavLink>
      <NavLink className='px-2 py-1' to="vehicles/delete">DELETE VEHICLE</NavLink>
    </div>
    <div className='mt-auto'>MEDIA</div>
  </div>
);

export default Navbar;
