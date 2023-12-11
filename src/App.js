import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';
import Login from './components/Login';
import Signup from './components/Signup';
import Cars from './components/Cars';
import ShowCar from './components/ShowBike';
import AddReservation from './components/AddReservation';
import AddCars from './components/AddCars';
import Layout from './components/Layout';
import ReservationList from './components/ReservationList';
import DeleteCars from './components/DeleteCars';

const AuthenticatedRoute = ({ element }) => {
  const isCookieSet = Cookies.get('Authorization') !== undefined;
  return isCookieSet ? element : <Navigate to="/login" />;
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="reserve"
        element={<AuthenticatedRoute element={<AddReservation />} />}
      />
      <Route path="/" element={<Layout />}>
        <Route index element={<AuthenticatedRoute element={<Cars />} />} />
        <Route
          path="/new-motor"
          element={<AuthenticatedRoute element={<AddCars />} />}
        />
        <Route
          path="show/:id"
          element={<AuthenticatedRoute element={<ShowCar />} />}
        />
        <Route
          path="reserve/:id"
          element={<AuthenticatedRoute element={<AddReservation />} />}
        />
        <Route
          path="reservation"
          element={<AuthenticatedRoute element={<ReservationList />} />}
        />
        <Route path="delete-motor" element={<AuthenticatedRoute element={<DeleteCars />} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

AuthenticatedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};
export default App;
