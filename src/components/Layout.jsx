import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => (
  <>
    <div className="flex h-screen z-40">
      <Navigation />
      <div className="flex justify-center items-center w-10/12">
        <Outlet />
      </div>
    </div>
  </>
);

export default Layout;
