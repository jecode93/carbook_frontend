import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { login } from '../redux/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (token) {
      Cookies.set('Authorization', token, { expires: 7 });
      navigate('/');
    }
  }, [token, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username));
  };

  return (
    <div className="flex items-center justify-center w-full px-3 h-screen">
      <form
        className="flex flex-col gap-8 w-full items-center"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Enter your username to login"
          className="rounded-lg border-2 w-3/4 md:w-[50%] p-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          type="submit"
          className="text-xl bg-green-600 hover:bg-green-700 text-white duration-300 rounded-lg py-1 w-24"
        >
          Login
        </button>
        <p>
          <span className="text-gray-400">New to MotorBook? </span>
          <Link to="/signup" className="hover:underline">Sign up now</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
