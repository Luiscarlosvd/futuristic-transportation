import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaVimeoV, FaPinterestP } from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import logo from '../../assets/images/logo-no-back.png';

const Navbar = () => {
  const location = useLocation();

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (['/', '/log-in', '/sign-up'].includes(location.pathname)) {
      setShow(false);
    } else {
      setShow(true);
    }
    if (window.innerWidth <= 768) {
      setShow(false);
    }
  }, [location]);

  return (
    <>
      <HiMenuAlt4
        onClick={() => {
          toggleShow();
        }}
        className={`fixed left-3 top-3 text-3xl cursor-pointer nav-icon ${
          show ? 'display' : 'hide'
        } ${location.pathname === '/' || location.pathname === '/log-in' || location.pathname === '/sign-up' ? 'block white' : 'hidden'}`}
      />
      <div
        className={`bg-white fixed -left-full h-screen overflow-y-scroll flex flex-col justify-start z-50 w-60 nav-container ${
          show ? 'display' : 'hide'
        }`}
      >
        <img src={logo} className="w-2/3 mx-auto" alt="Galactic Gears" />
        <div className="flex flex-col font-ace ml-2 text-darkGrey font-bold navigation">
          <NavLink className="p-2" to="/">
            HOME
          </NavLink>
          <NavLink className="p-2" to="/vehicles">
            VEHICLES LIST
          </NavLink>
          <NavLink className="p-2" to="/details/id">
            VEHICLE DETAILS
          </NavLink>
          <NavLink className="p-2" to="/my-reservations">
            MY RESERVATIONS
          </NavLink>
          <NavLink className="p-2" to="/reserve">
            RESERVE
          </NavLink>
          <NavLink className="p-2" to="details/id/reserve">
            RESERVE SPECIFIC
          </NavLink>
          <NavLink className="p-2" to="log-in">
            LOGIN
            {' '}
          </NavLink>
          <NavLink className="p-2" to="sign-up">
            SIGNUP
          </NavLink>
          <NavLink className="p-2" to="vehicles/new">
            ADD VEHICLE
          </NavLink>
          <NavLink className="px-2 py-1" to="vehicles/delete">
            DELETE VEHICLE
          </NavLink>
        </div>
        <div className="mt-auto flex flex-col gap-3 ml-4 mb-3">
          <div className="flex gap-2 items-center text-darkGrey media-list">
            <BsTwitter />
            <FaFacebookF />
            <TiSocialGooglePlus />
            <FaVimeoV />
            <FaPinterestP />
          </div>
          <p className="licence">© 2023 Galactic Gears.</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
