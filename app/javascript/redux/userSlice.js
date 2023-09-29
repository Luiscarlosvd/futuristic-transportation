import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (data) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await axios.post("/register", data, headers);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
  async (data) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        const response = await axios.post("/login", data, headers);
        return response.data;
    } catch (error) {
        return error.message;
    }
  }
);


const initialState = {
  user: window.current_user,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => ({
        ...state,
        status: "Loading",
      }))
      .addCase(createUser.fulfilled, (state) => {
        window.location.replace('/');
        return { 
          ...state,
          status: "fulfilled",
          user: window.current_user,
        }
      })
      .addCase(createUser.rejected, (state, action) => {
        window.location.reload();
        return { 
          ...state,
          status: "rejected",
          error: action.error.message,
        }
      })
      .addCase(loginUser.pending, (state) => ({
        ...state,
        status: "Loading",
      }))
      .addCase(loginUser.fulfilled, (state) => {
        window.location.replace('/');
        return { 
          ...state,
          status: "fulfilled",
          user: window.current_user,
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        window.location.reload();
        return { 
          ...state,
          status: "rejected",
          error: action.error.message,
        }
      });
  },
});

export default userSlice.reducer;