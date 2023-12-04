import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/auth/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup(username));
  };

  return (
    <form className="flex flex-col gap-8 items-center justify-center w-full h-screen" onSubmit={handleSignup}>
      <input
        type="text"
        name="username"
        autoComplete="username"
        placeholder="username"
        className="rounded-lg border-2 w-4/5 md:w-[50%] p-1"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        type="submit"
        className="text-xl font-bold bg-orange-500 text-white rounded-lg py-1 w-24"
      >
        Sign up
      </button>
      <span className="font-bold">already user? Login</span>
    </form>
  );
};

export default Signup;
