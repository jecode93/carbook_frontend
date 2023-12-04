import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './Bikes/bikeSlice';
import authSlice from './auth/authSlice';

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
    auth: authSlice,
  },
});

export default store;
