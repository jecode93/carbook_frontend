import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
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
              <h1 className="font-bold text-2xl">Motor Book 🏍</h1>
            </NavLink>
          </div>
          <ul className="pt-40">
            <li>
              <NavLink to="/home">
                Motors
              </NavLink>
            </li>
            <li>
              <NavLink to="/new-motor">
                Add motor
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservations">
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink to="/delete-motor">
                Delete motor
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
