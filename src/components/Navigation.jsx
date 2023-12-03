import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={!isOpen ? '' : 'absolute left-0 right-0 shadow-xl md:static h-screen md:w-2/4 lg:w-1/4 bg-white duration-300'}>
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          className={
            isOpen
              ? 'hidden'
              : 'flex absolute left-2 top-2 p-1 text-2xl font-bold md:bg-none lg:hidden md:hidden cursor-pointer'
          }
          onKeyDown={toggleMenu}
          onClick={toggleMenu}
        >
          <IoIosMenu />
        </div>
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          className={
            isOpen
              ? 'flex absolute left-2 top-2 p-1 text-2xl font-bold lg:hidden md:hidden cursor-pointer duration-300'
              : 'hidden'
          }
          onKeyDown={toggleMenu}
          onClick={toggleMenu}
        >
          <AiOutlineClose />
        </div>
        <nav className={!isOpen ? 'hidden duration-300' : 'pt-10 pl-5 flex flex-col'}>
          <div className="pt-5">
            <Link to="/">
              <h1 className="font-logo font-bold text-2xl">Motor Book</h1>
            </Link>
          </div>
          <ul className="pt-40 font-bold">
            <li className="mb-4 p-2 bg-green-600 text-white">
              <Link to="/" onClick={toggleMenu}>
                Motorcycles
              </Link>
            </li>
            <li className="mb-4 p-2">
              <Link to="/new-motor" onClick={toggleMenu}>
                Add motorcycle
              </Link>
            </li>
            <li className="mb-4 p-2">
              <Link to="/reservations" onClick={toggleMenu}>
                My Reservations
              </Link>
            </li>
            <li className="mb-4 p-2">
              <Link to="/delete-motor" onClick={toggleMenu}>
                Delete motorcycle
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-10">
            <Link to="signup" onClick={toggleMenu}>
              Sign out
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
