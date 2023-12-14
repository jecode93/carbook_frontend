import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'https://final-capstone-backend-tgot.onrender.com/';

export const displayReservation = createAsyncThunk(
  'reservation/displayReservation',
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get('Authorization');
      const resp = await axios.get(`${BASE_URL}display_reservation`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const createReservation = createAsyncThunk(
  'reservation/createReservation',
  async (reservation, thunkAPI) => {
    try {
      const token = Cookies.get('Authorization');
      const resp = await axios.post(`${BASE_URL}reserve`, { reservation }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  reservationMessage: '',
  display: '',
  isLoading: false,
  error: undefined,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createReservation.pending,
        (state) => ({ ...state, isLoading: true }))
      .addCase(createReservation.fulfilled,
        (state, action) => ({ ...state, isLoading: false, reservationMessage: action.payload }))
      .addCase(createReservation.rejected,
        (state, action) => ({ ...state, isLoading: false, error: action.payload.message ? action.payload.message : 'An error occurred' }))
      .addCase(displayReservation.pending,
        (state) => ({ ...state, isLoading: true }))
      .addCase(displayReservation.fulfilled,
        (state, action) => ({ ...state, isLoading: false, display: action.payload }));
  },
});

export default reservationSlice.reducer;
