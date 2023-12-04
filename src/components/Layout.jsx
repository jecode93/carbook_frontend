import React from 'react';
import Navigation from './Navigation';

const Layout = () => (
  <>
    <div className="flex h-screen">
      <div className="lg:w-3/12 lg:p-5 shadow-xl md:relative fixed bg-white h-screen">
        <Navigation />
      </div>
      <div className="lg:w-10/12 flex items-center bg-green-600 w-full">
        Content
      </div>
    </div>
  </>
);

export default Layout;
