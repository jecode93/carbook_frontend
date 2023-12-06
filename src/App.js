import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import Bikes from './components/Bikes';
import AddMotorcycle from './components/AddMotorcycle';
import ShowCar from './components/ShowBike';
import AddReservation from './components/AddReservation';

function AuthenticatedRoute({ element }) {
  const isAuthenticated = useSelector((state) => state.auth.authenticate);
  return isAuthenticated ? element : <Navigate to="/login" />;
}
function App() {
  return (
    <div className="relative md:flex">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<AuthenticatedRoute element={<Bikes />} />}
          />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/new-motor" element={<AddMotorcycle />} />
          <Route path="show/:id" element={<AuthenticatedRoute element={<ShowCar />} />} />
          <Route path="reserve" element={<AuthenticatedRoute element={<AddReservation />} />} />
          <Route path="reserve/:id" element={<AuthenticatedRoute element={<AddReservation />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
AuthenticatedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};
export default App;
