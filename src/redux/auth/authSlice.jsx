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

export const signup = createAsyncThunk(
  'bikes/signup',
  async (username, thunkAPI) => {
    try {
      const resp = await axios.post(`${BASE_URL}/signup`, { username });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  message: '',
  token: null,
  authenticate: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled,
        (state, action) => ({ ...state, authenticate: true, token: action.payload.token }))
      .addCase(signup.fulfilled,
        (state, action) => ({ ...state, message: action.payload.message }));
  },
});

export default authSlice.reducer;
