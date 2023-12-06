import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/';

const tokenSelector = (state) => state.auth.token;

export const displayReservation = createAsyncThunk(
  'reservation/displayReservation',
  async (_, thunkAPI) => {
    try {
      const token = tokenSelector(thunkAPI.getState());
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
      const token = tokenSelector(thunkAPI.getState());
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
      .addCase(displayReservation.fulfilled,
        (state, action) => ({ ...state, isLoading: false, display: action.payload }));
  },
});

export default reservationSlice.reducer;
