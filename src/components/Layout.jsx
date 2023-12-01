import React from 'react';
import Navigation from './Navigation';

const Layout = () => (
  <>
    <div className="flex h-screen">
      <div className="lg:w-3/12 lg:p-5">
        <Navigation />
      </div>
      <div className="lg:w-10/12 flex items-center bg-green-600 w-full">
        Content
      </div>
    </div>
  </>
);

export default Layout;
