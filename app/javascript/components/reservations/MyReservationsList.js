import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservationsSlice';
import { getVehiclesInfo } from '../../redux/vehicleSlice';

const MyReservationsList = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((store) => store.reservations);
  const { vehicles } = useSelector((store) => store.vehicles);

  const userId = 1;

  useEffect(() => {
    if (reservations.length === 0) {
      dispatch(fetchReservations());
    }
    if (vehicles.length === 0) {
      dispatch(getVehiclesInfo());
    }
  }, []);

  const userReserves = reservations.filter((reservation) => reservation.user_id === userId);
  const vehicleIds = userReserves.map((reservation) => reservation.vehicle_id);
  const filteredVehicles = vehicles.filter((vehicle) => vehicleIds.includes(vehicle.id));

  console.log(userReserves, vehicleIds, filteredVehicles);

  return (
    <div className="flex">
      <div className="navbar-space" />
      <div className="min-h-screen">

        <h1 className="text-center text-xl font-bold text-gray-700 py-6">Reservations</h1>
        <div className="flex flex-row flex-wrap justify-center gap-8">

          {filteredVehicles.map((vehicle, index) => (
            <div key={vehicle.id} className="flex flex-col items-center">
              <img
                src={vehicle.photo}
                alt={vehicle.name}
                className="w-64 h-40 object-cover"
              />
              <div className="bg-white w-64 rounded-xl shadow-md p-4">
                <p className="text-gray-700 font-bold text-lg">{vehicle.name}</p>
                <p className="text-gray-500 text-sm">{vehicle.description}</p>
                <p className="text-gray-500 font-bold text-sm">{userReserves[index].city}</p>
                <p className="text-gray-500 text-sm">{userReserves[index].event_date}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default MyReservationsList;
