import React from 'react';
import Navigation from './Navigation';

const Layout = () => (
  <>
    <div className="flex h-screen">
      <div className="md:w-2/12 md:p-5">
        <Navigation />
      </div>
      <div className="md:w-10/12 flex items-center bg-green-600 w-full">
        Content
      </div>
    </div>
  </>
);

export default Layout;
