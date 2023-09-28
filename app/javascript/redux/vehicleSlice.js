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

  export const newVehicle = createAsyncThunk("vehicles/newVehicle", async (formData) => {
    const response = await axios.post(`/api/v1/vehicles`, {
      vehicles: formData,
    });
    console.log(formData);
    console.log(response);
    return response.data;
  });

  export const deleteVehicle = createAsyncThunk("vehicles/deleteVehicles", async (itemId) => {
    await axios.delete(`/api/v1/vehicles/${itemId}`);
    return itemId; // Return the deleted vehicle's ID to update the state
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
      .addCase(getVehiclesInfo.rejected, (state, action) => ({ ...state, status: 'rejected', error: action.error.message }));
  },
});

export default vehiclesSlice.reducer;
