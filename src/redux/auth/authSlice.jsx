/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000';

export const login = createAsyncThunk(
    'bikes/login',
    async (username, thunkAPI) => {
      try {
        const resp = await axios.post(`${BASE_URL}/login`, { username });
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    },
  );

const initialState = {
  token: null,
  authenticate: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload);
        state.authenticate = true;
        state.token = action.payload;
      });
  },
});

export default authSlice.reducer;
