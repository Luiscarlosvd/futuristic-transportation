import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getVehiclesInfo = createAsyncThunk('vehicles/getVehiclesInfo',
  async () => {
    try {
      const response = await axios.get('/api/v1/vehicles');
      return response.data.vehicles;
    } catch (error) {
      return error.message;
    }
  });

export const newVehicle = createAsyncThunk('vehicles/newVehicle', async (formData) => {
  try {
    const response = await axios.post('/api/v1/vehicles', formData);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteVehicle = createAsyncThunk('vehicles/deleteVehicle', async (itemId) => {
  try {
    const response = await axios.delete(`/api/v1/vehicles/${itemId}`);
    return response; // Return the deleted vehicle's ID to update the state
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  vehicles: [],
  status: 'idle',
  error: null,
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVehiclesInfo.pending, (state) => ({ ...state, status: 'Loading' }))
      .addCase(getVehiclesInfo.fulfilled, (state, action) => ({ ...state, status: 'fulfilled', vehicles: action.payload }))
      .addCase(getVehiclesInfo.rejected, (state, action) => ({ ...state, status: 'rejected', error: action.error.message }))
      .addCase(newVehicle.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(newVehicle.fulfilled, (state, action) => {
        if (action.payload === 'Request failed with status code 422') {
          window.location.reload();
        } else {
          window.location.replace('/vehicles');
        }
        return {
          ...state,
          status: 'fulfilled',
          user: window.current_user,
        };
      })
      .addCase(newVehicle.rejected, (state, action) => {
        window.location.replace('/vehicles/new');
        return {
          ...state,
          status: 'rejected',
          error: action.error.message,
        };
      })
      .addCase(deleteVehicle.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(deleteVehicle.fulfilled, (state, action) => {
        if (action.payload === 'Request failed with status code 422') {
          window.location.reload();
        } else {
          window.location.replace('/vehicles');
        }
        return {
          ...state,
          status: 'fulfilled',
          user: window.current_user,
        };
      })
      .addCase(deleteVehicle.rejected, (state, action) => {
        window.location.replace('/vehicles/delete');
        return {
          ...state,
          status: 'rejected',
          error: action.error.message,
        };
      });
  },
});

export default vehiclesSlice.reducer;
