import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

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
  userId: null,
  message: '',
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => ({
      ...state,
      token: null,
      userId: null,
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { token } = action.payload;
        const userId = jwtDecode(token).user_id;

        return {
          ...state,
          token,
          userId,
        };
      })
      .addCase(signup.fulfilled,
        (state, action) => ({ ...state, message: action.payload.message }));
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
