import React from 'react';

const CircularProgressBar = () => (
  <div className=" w-12 h-12 absolute top-[50%]">
    <div className="w-full h-full rounded-[50%] border-4 border-y-blue-500 animate-spin" />
  </div>
);

export default CircularProgressBar;
