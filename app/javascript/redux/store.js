import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './vehicleSlice';

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
  },
});

export default store;
