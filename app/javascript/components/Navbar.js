import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HiMenuAlt4 } from 'react-icons/hi';
import { BsTwitter } from 'react-icons/bs';
import {
  FaFacebookF, FaVimeoV, FaPinterestP, FaGoogle,
} from 'react-icons/fa';
import { deleteSession } from '../redux/userSlice';

import useWindowResize from './hooks/useWindowResize';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const { width } = useWindowResize();

  const { vehicleId } = useParams();

  const location = useLocation();

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (
      [
        '/',
        '/log-in',
        '/sign-up',
        '/reserve',
        `/details/${vehicleId}/reserve`,
        '/vehicles/new',
      ].includes(location.pathname)
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
    if (width <= 768) {
      setShow(false);
    }
  }, [width, location, vehicleId]);

  return (
    <>
      <HiMenuAlt4
        onClick={() => {
          toggleShow();
        }}
        className={`fixed left-3 top-3 text-3xl cursor-pointer nav-icon ${
          show ? 'display' : 'hide'
        } ${
          [
            '/',
            '/log-in',
            '/sign-up',
            '/reserve',
            `/details/${vehicleId}/reserve`,
            '/vehicles/new',
          ].includes(location.pathname)
            ? 'block white'
            : 'hidden'
        }`}
      />
      <div
        className={`bg-white fixed -left-full h-screen overflow-y-scroll flex flex-col justify-start z-50 w-60 nav-container ${
          show ? 'display' : 'hide'
        }`}
      >
        <img
          src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAfROxiXkcJY1RmRHjSxhvjhAoCoES0deb_kWaEG_q1ldwOOSjlxjMwgq1jbgrfwgTak2hdWrx5FtyDOUpxMq2DofQA3w=w1912-h958"
          className="w-2/3 mx-auto"
          alt="Luxury Speedsters"
        />
        <div className="flex flex-col font-ace ml-2 text-darkGrey font-bold navigation mb-10">
          <NavLink className="px-2 py-3" to="/">
            HOME
          </NavLink>
          <NavLink className="px-2 py-3" to="/vehicles">
            VEHICLES LIST
          </NavLink>
          {user.user !== -1 && (
            <>
              <NavLink className="px-2 py-3" to="/my-reservations">
                RESERVATIONS
              </NavLink>
              <NavLink className="px-2 py-3" to="/reserve">
                RESERVE
              </NavLink>
              {user.admin && (
                <>
                  <NavLink className="px-2 py-3" to="vehicles/new">
                    ADD VEHICLE
                  </NavLink>
                  <NavLink className="px-2 py-3" to="vehicles/delete">
                    DELETE VEHICLE
                  </NavLink>
                </>
              )}
              <NavLink
                onClick={() => {
                  dispatch(deleteSession());
                }}
                className="px-2 py-3"
              >
                LOGOUT
              </NavLink>
            </>
          )}
          {user.user === -1 && (
            <>
              <NavLink className="px-2 py-3" to="log-in">
                LOGIN
              </NavLink>
              <NavLink className="px-2 py-3" to="sign-up">
                SIGNUP
              </NavLink>
            </>
          )}
        </div>
        <div className="mt-auto flex flex-col gap-3 ml-4 mb-3">
          <div className="flex gap-2 items-center text-darkGrey media-list">
            <BsTwitter />
            <FaFacebookF />
            <FaGoogle />
            <FaVimeoV />
            <FaPinterestP />
          </div>
          <p className="licence">© 2023 Luxury Speedsters.</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
