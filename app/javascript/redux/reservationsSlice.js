import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

export const fetchReservations = createAsyncThunk('reservations/fetchReservations',
  async () => {
    try {
      const response = await axios.get('api/v1/reservations');
      return response.data;
    } catch (error) {
      return error.message;
    }
  });

export const postReservation = createAsyncThunk('reservations/postReservation',
  async (reservationData) => {
    try {
      console.log(reservationData);
      const response = await axios.post('/api/v1/reservations', reservationData);
      return response.data;
    } catch (error) {
      return error.message;
    }
  });

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => ({ ...state, status: 'pending' }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({ ...state, status: 'fulfilled', reservations: action.payload }))
      .addCase(fetchReservations.rejected, (state, action) => ({ ...state, status: 'rejected', error: action.error.message }))
      .addCase(postReservation.pending, (state) => ({ ...state, status: 'pending' }))
      .addCase(postReservation.fulfilled, (state) => {
        window.location.replace('/my-reservations');
        return { ...state, status: 'fulfilled' };
      })
      .addCase(postReservation.rejected, (state, action) => {
        window.location.reload();
        return { ...state, status: 'rejected', error: action.error.message };
      });
  },
});

export default reservationsSlice.reducer;
