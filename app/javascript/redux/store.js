import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './vehicleSlice';
import reservationsReducer from './reservationsSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    reservations: reservationsReducer,
    user: userReducer,
  },
});

export default store;
