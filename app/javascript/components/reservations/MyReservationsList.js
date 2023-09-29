import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservationsSlice';
import { getVehiclesInfo } from '../../redux/vehicleSlice';

const MyReservationsList = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((store) => store.reservations);
  const userId = useSelector((state) => state.user.user);
  const { vehicles } = useSelector((store) => store.vehicles);

  function formatEventDate(eventDate) {
    const date = new Date(eventDate);
    const options = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }

  useEffect(() => {
    if (reservations.length === 0) {
      dispatch(fetchReservations());
    }
    if (vehicles.length === 0) {
      dispatch(getVehiclesInfo());
    }
  }, [dispatch, reservations.length, vehicles.length]);

  const userReserves = reservations.filter((reservation) => reservation.user_id === userId);
  const vehicleIds = userReserves.map((reservation) => reservation.vehicle_id);
  console.log(vehicleIds)
  const filteredVehicles = vehicles.filter((vehicle) => vehicleIds.includes(vehicle.id));

  return (
    <div className="flex">
      <div className="navbar-space" />
      <div className="min-h-screen w-full bg-slate-50 pb-6">

        <h1 className="text-center text-4xl text-shadow-title py-6 mb-20 font-ace text-darkGrey">Reservations</h1>
        <div className="flex flex-row flex-wrap justify-center gap-8">

          {filteredVehicles.map((vehicle, index) => (
            <div key={vehicle.id} className="flex flex-col items-center">
              <img
                src={vehicle.photo}
                alt={vehicle.name}
                className="w-64 h-40 object-cover"
              />
              <div className="bg-reservations w-64 rounded-xl shadow-md p-4">
                <p className="text-gray-700 font-bold text-lg">{vehicle.name}</p>
                <p className="text-gray-500 text-sm">{vehicle.description}</p>
                <p className="text-gray-500 font-bold text-sm">{userReserves[index].city}</p>
                <p className="text-gray-500 font-bold text-lg">{formatEventDate(userReserves[index].event_date)}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default MyReservationsList;
