import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authenticate } = useSelector((store) => store.auth);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (authenticate) {
      navigate('/');
    }
  }, [authenticate, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username));
  };

  return (
    <div className="flex items-center justify-center w-full px-3 h-screen">
      <form className="flex flex-col gap-8 w-full items-center" onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          autoComplete="username"
          placeholder="username"
          className="rounded-lg border-2 w-3/4 md:w-[50%] p-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          type="submit"
          className="text-xl font-bold bg-orange-500 text-white rounded-lg py-1 w-24"
        >
          Login
        </button>
        <span className="font-bold">new user? Signup</span>
      </form>
    </div>
  );
};

export default Login;
