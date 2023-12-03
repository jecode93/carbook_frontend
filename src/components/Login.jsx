import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { token, authenticate } = useSelector((store) => store.auth);
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username));
  };

  return (
    <div className="flex items-center justify-center w-full px-3">
      <form className="flex flex-col gap-2 w-full items-center" onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          autoComplete="username"
          placeholder="username"
          className="rounded-lg border-2 w-[50%] p-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          type="submit"
          className="text-xl font-bold bg-orange-500 text-white rounded-lg py-1 w-[12%]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
