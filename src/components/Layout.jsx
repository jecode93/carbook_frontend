import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => (
  <>
    <div className="flex h-screen">
      <Navigation />
      <div className="flex justify-center w-full">
        <Outlet />
      </div>
    </div>
  </>
);

export default Layout;
