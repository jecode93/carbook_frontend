import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authSlice';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile version */}
      <div className={!isOpen ? '' : 'md:hidden fixed top-0 left-0 right-0 bottom-0 md:static h-screen md:w-3/12 bg-white duration-300'}>
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          id="menu-toggle"
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
              <h1 className="font-logo font-bold text-2xl">CAR Book</h1>
            </Link>
          </div>
          <ul className="pt-40 font-bold">
            <li className="mb-4 p-2 bg-green-600 text-white">
              <Link to="/" onClick={toggleMenu}>
                Cars
              </Link>
            </li>
            <li className="mb-4 p-2">
              <Link to="/new-motor" onClick={toggleMenu}>
                Add Cars
              </Link>
            </li>
            <li className="mb-4 p-2">
              <Link to="/reserve" onClick={toggleMenu}>
                Reserve
              </Link>
            </li>
            <li className="mb-4 p-2">
              <Link to="/reservation" onClick={toggleMenu}>
                My Reservations
              </Link>
            </li>
            <li className="mb-4 p-2">
              <Link to="/delete-motor" onClick={toggleMenu}>
                Delete Cars
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <Link
              to="/login"
              onClick={() => {
                dispatch(logout());
                toggleMenu();
              }}
            >
              Sign out
            </Link>
          </div>
        </nav>
      </div>

      {/* Desktop navigation */}
      <div className="relative z-40 bg-white hidden shadow-2xl md:flex md:flex-col md:w-[30%] lg:w-[20%] md:h-screen pt-10 pl-5 duration-300">
        <nav>
          <div className="pt-5">
            <Link to="/">
              <h1 className="font-logo font-bold text-2xl">CAR Book</h1>
            </Link>
          </div>
          <ul className="nav-links pt-40 font-bold">
            <li className="items-links mb-2 hover:bg-green-600 hover:text-white">
              <Link to="/" onClick={toggleMenu} className="w-full focus:bg-green-600 focus:text-white p-2 block">
                Cars
              </Link>
            </li>
            <li className="items-links mb-2 hover:bg-green-600 hover:text-white">
              <Link to="/new-motor" onClick={toggleMenu} className="focus:bg-green-600 focus:text-white p-2 block">
                Add Cars
              </Link>
            </li>
            <li className="items-links mb-2 hover:bg-green-600 hover:text-white">
              <Link to="/reserve" onClick={toggleMenu} className="focus:bg-green-600 focus:text-white p-2 block">
                Reserve
              </Link>
            </li>
            <li className="items-links mb-2 hover:bg-green-600 hover:text-white">
              <Link to="/reservation" onClick={toggleMenu} className="focus:bg-green-600 focus:text-white p-2 block">
                My Reservations
              </Link>
            </li>
            <li className="items-links mb-2 hover:bg-green-600 hover:text-white">
              <Link to="/delete-motor" onClick={toggleMenu} className="focus:bg-green-600 focus:text-white p-2 block">
                Delete Cars
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <Link
              to="/login"
              onClick={() => {
                dispatch(logout());
                toggleMenu();
              }}
              className="bg-red-600 hover:bg-red-700 duration-300 shadow-2xl text-white font-bold px-3 py-2 rounded-lg"
            >
              Sign out
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
