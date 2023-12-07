import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../redux/auth/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup(username));
    navigate('/login');
  };

  return (
    <form
      className="flex flex-col gap-8 items-center justify-center w-full h-screen"
      onSubmit={handleSignup}
    >
      <input
        type="text"
        name="username"
        autoComplete="username"
        placeholder="Enter an username to sign up"
        className="rounded-lg border-2 w-4/5 md:w-[50%] p-1"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        type="submit"
        className="text-xl bg-green-600 hover:bg-green-700 duration-300 text-white rounded-lg py-1 w-24"
      >
        Sign up
      </button>
      <p>
        <span className="text-gray-400">Already have an account? </span>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Signup;
