import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import React from "react"

const Layout = () => (
  <div className="layout">
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;