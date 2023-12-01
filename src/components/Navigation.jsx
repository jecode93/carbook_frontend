import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={!isOpen ? 'wrapper fixed md:bg-white h-screen duration-300' : 'w-2/12'}>
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          className={
            isOpen
              ? 'hidden'
              : 'block p-1 text-2xl font-bold md:hidden cursor-pointer'
          }
          onKeyDown={toggleMenu}
          onClick={toggleMenu}
        >
          <IoIosMenu />
        </div>
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          className={
            isOpen
              ? 'block p-1 text-2xl font-bold md:hidden cursor-pointer duration-300'
              : 'hidden'
          }
          onKeyDown={toggleMenu}
          onClick={toggleMenu}
        >
          <AiOutlineClose />
        </div>
        <nav className={!isOpen ? 'hidden md:block duration-300' : ' pt-10 pl-5 w-screen flex flex-col'}>
          <div>
            <NavLink to="/home">
              <h1 className="font-logo font-bold text-2xl">Motor Book</h1>
            </NavLink>
          </div>
          <ul className="pt-40 font-bold">
            <li className="mb-4 p-2 bg-green-600 text-white">
              <NavLink to="/home" activeClassName="active">
                Motorcycles
              </NavLink>
            </li>
            <li className="mb-4 p-2">
              <NavLink to="/new-motor" activeClassName="active">
                Add motorcycle
              </NavLink>
            </li>
            <li className="mb-4 p-2">
              <NavLink to="/reservations" activeClassName="active">
                My Reservations
              </NavLink>
            </li>
            <li className="mb-4 p-2">
              <NavLink to="/delete-motor" activeClassName="active">
                Delete motorcycle
              </NavLink>
            </li>
          </ul>
          <div className="absolute bottom-5">
            <NavLink>
              Sign out
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
