import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/images/logo-no-back.png";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {

  const location = useLocation();

  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(()=>{
    console.log(location)
    location.pathname === "/" || location.pathname === "/log-in" || location.pathname === "/sign-up" ? setShow(false) : setShow(true) ;
  }, [location]);

  return (
    <>
      <HiMenuAlt4
        onClick={() => {
          toggleShow();
        }}
        className={`fixed text-primaryGreen left-3 top-3  text-3xl cursor-pointer nav-icon ${
          show ? "display" : "hide"
        } ${location.pathname === "/" || location.pathname === "/log-in" || location.pathname === "/sign-up"  ? "block" : "hidden" }`}
      />
      <div
        className={`bg-white fixed h-screen flex flex-col justify-start z-50 w-60 nav-container ${
          show ? "display" : "hide"
        }`}
      >
        <img src={logo} className="w-2/3 mx-auto" />
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
            LOGIN{" "}
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
        <div className="mt-auto">
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
