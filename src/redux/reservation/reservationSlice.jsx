import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/';

const tokenSelector = (state) => state.auth.token;

export const createReservation = createAsyncThunk(
  'reservation/createReservation',
  async (reservation, thunkAPI) => {
    try {
      const token = tokenSelector(thunkAPI.getState());
      const resp = await axios.post(`${BASE_URL}/reserve`, { reservation }, {
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
  isLoading: false,
  error: undefined,
};

const reservationSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createReservation.pending,
        (state) => ({ ...state, isLoading: true }))
      .addCase(createReservation.fulfilled,
        (state, action) => ({ ...state, isLoading: false, reservationMessage: action.payload }))
      .addCase(createReservation.rejected,
        (state, action) => ({ ...state, isLoading: false, error: action.payload.message ? action.payload.message : 'An error occurred' }));
  },
});

export default reservationSlice.reducer;
