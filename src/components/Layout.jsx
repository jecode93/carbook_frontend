import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => (
  <>
    <div className="flex h-screen z-40">
      <Navigation />
      <div className="flex justify-center w-full overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  </>
);

export default Layout;
