import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

function readCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i];
    const cookieName = cookie.split('=')[0].trim();
    const cookieValue = cookie.split('=')[1];
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return '';
}

const csrfToken = readCookie('CSRF_TOKEN');

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

export const createUser = createAsyncThunk(
  'user/createUser',
  async (data) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await axios.post('/register', data, headers);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await axios.post('/login', data, headers);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const deleteSession = createAsyncThunk('user/deleteSession', async () => {
  try {
    const response = await axios.delete(`/login/${window.current_user}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  user: window.current_user,
  admin: window.isAdmin,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => ({
        ...state,
        status: 'Loading',
      }))
      .addCase(createUser.fulfilled, (state, action) => {
        if (action.payload === 'Request failed with status code 422') {
          window.location.reload('/sign-up');
        } else {
          window.location.replace('/');
        }
        console.log(action);
        return {
          ...state,
          status: 'fulfilled',
          user: window.current_user,
        };
      })
      .addCase(createUser.rejected, (state, action) => {
        window.location.reload();
        return {
          ...state,
          status: 'rejected',
          error: action.error.message,
        };
      })
      .addCase(loginUser.pending, (state) => ({
        ...state,
        status: 'Loading',
      }))
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload === 'Request failed with status code 422') {
          window.location.reload('/log-in');
        } else {
          window.location.replace('/');
        }
        return {
          ...state,
          status: 'fulfilled',
          user: window.current_user,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        window.location.replace('/log-in');
        return {
          ...state,
          status: 'rejected',
          error: action.error.message,
        };
      })
      .addCase(deleteSession.pending, (state) => ({
        ...state,
        status: 'Loading',
      }))
      .addCase(deleteSession.fulfilled, (state) => {
        window.location.replace('/');
        return {
          ...state,
          status: 'fulfilled',
          user: window.current_user,
        };
      })
      .addCase(deleteSession.rejected, (state, action) => {
        window.location.replace('/');
        return {
          ...state,
          status: 'rejected',
          error: action.error.message,
        };
      });
  },
});

export default userSlice.reducer;
