import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/';

const tokenSelector = (state) => state.auth.token;

export const getBikes = createAsyncThunk(
  'bikes/getBikes',
  async (_, thunkAPI) => {
    try {
      const token = tokenSelector(thunkAPI.getState());
      const resp = await axios.get(`${BASE_URL}display_bikes`, {
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
  message: '',
  isLoading: false,
  error: undefined,
};

const bikeSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBikes.pending,
        (state) => ({ ...state, isLoading: true }))
      .addCase(getBikes.fulfilled,
        (state, action) => ({ ...state, isLoading: false, message: action.payload }))
      .addCase(getBikes.rejected,
        (state, action) => ({ ...state, isLoading: false, error: action.payload.message ? action.payload.message : 'An error occurred' }));
  },
});

export default bikeSlice.reducer;
