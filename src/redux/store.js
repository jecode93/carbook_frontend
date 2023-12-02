import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './Bikes/bikeSlice';

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
  },
});

export default store;
