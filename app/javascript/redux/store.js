import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './vehicleSlice';
import reservationsReducer from './reservationsSlice';

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    reservations: reservationsReducer,
  },
});

export default store;
