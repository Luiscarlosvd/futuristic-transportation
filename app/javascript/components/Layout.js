import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';

const Layout = () => (
  <div className="layout">
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;
