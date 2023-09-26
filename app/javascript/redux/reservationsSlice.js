import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getReservationsInfo = createAsyncThunk('reservations/getReservationsInfo',
  async () => {
    try {
      const response = await axios.get('api/v1/reservations');
      return response.data;
    } catch (error) {
      return error.message;
    }
  });

const initialState = {
  vehicles: [
    {
      id: 1,
      name: 'Super duper vehicle',
      description: 'This is the best vehicle you are going to see',
      price: 20000.99,
      photo: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaBZu9r6FDBzFsC-K13-wIdpBV3ncfnI35pQJfcRzpkOO0MOq_16QER_pHSAf7RZvXnTZYJ_SnasIVS8mUjoq06_-bWpbQ=w1868-h903',
      photo_back: 'link.png',
      photo_left: 'link.png',
      photo_right: 'link.png',
    },
    {
      id: 2,
      name: 'Super duper vehicle number 2',
      description: 'This is the best vehicle you are going to see x2',
      price: 39.99,
      photo: 'link.png',
      photo_back: 'link.png',
      photo_left: 'link.png',
      photo_right: 'link.png',
    },
  ],
  status: 'idle',
  error: null,
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVehiclesInfo.fulfilled, (state, action) => ({ ...state, status: 'fulfilled', vehicles: action.payload }))
      .addCase(getVehiclesInfo.pending, (state) => ({ ...state, status: 'Loading' }))
      .addCase(getVehiclesInfo.rejected, (state, action) => ({ ...state, status: 'rejected', error: action.error.message }));
  },
});

export default vehiclesSlice.reducer;
