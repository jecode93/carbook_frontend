import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './Bikes/bikeSlice';
import authSlice from './auth/authSlice';
import reservationSlice from './reservation/reservationSlice';

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
    auth: authSlice,
    reservation: reservationSlice,
  },
});

export default store;
