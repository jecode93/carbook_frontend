import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const BASE_URL = 'https://final-capstone-backend-tgot.onrender.com';

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
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove('Authorization');
      return {
        ...state,
        token: null,
        userId: null,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(login.fulfilled, (state, action) => {
        const { token } = action.payload;
        const userId = jwtDecode(token).user_id;

        return {
          ...state,
          token,
          userId,
          isLoading: false,
        };
      })
      .addCase(signup.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(signup.fulfilled,
        (state, action) => ({ ...state, message: action.payload.message, isLoading: false }));
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
