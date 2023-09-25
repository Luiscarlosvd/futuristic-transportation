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
        }`}
      />
      <div
        className={`bg-white fixed h-screen flex flex-col justify-start z-50 w-60 nav-container ${
          show ? "display" : "hide"
        }`}
      >
        <img src={logo} className="w-2/3 mx-auto" />
        <div className="flex flex-col font-ace ml-2 text-slate-800 font-bold navigation">
          <NavLink className="px-2 py-1" to="/">
            HOME
          </NavLink>
          <NavLink className="px-2 py-1" to="/vehicles">
            VEHICLES LIST
          </NavLink>
          <NavLink className="px-2 py-1" to="/details/id">
            VEHICLE DETAILS
          </NavLink>
          <NavLink className="px-2 py-1" to="/my-reservations">
            MY RESERVATIONS
          </NavLink>
          <NavLink className="px-2 py-1" to="/reserve">
            RESERVE
          </NavLink>
          <NavLink className="px-2 py-1" to="details/id/reserve">
            RESERVE SPECIFIC
          </NavLink>
          <NavLink className="px-2 py-1" to="log-in">
            LOGIN{" "}
          </NavLink>
          <NavLink className="px-2 py-1" to="sign-up">
            SIGNUP
          </NavLink>
          <NavLink className="px-2 py-1" to="vehicles/new">
            ADD VEHICLE
          </NavLink>
          <NavLink className="px-2 py-1" to="vehicles/delete">
            DELETE VEHICLE
          </NavLink>
        </div>
        <div className="mt-auto">MEDIA</div>
      </div>
    </>
  );
};

export default Navbar;

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function Navbar() {
//   // Get the current location object
//   const location = useLocation();

//   // Conditionally render different components based on the pathname
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/about">About</a>
//         </li>
//         {location.pathname === '/' && (
//           <li>
//             <a href="/contact">Contact</a>
//           </li>
//         )}
//         {location.pathname === '/about' && (
//           <li>
//             <a href="/">Back</a>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
