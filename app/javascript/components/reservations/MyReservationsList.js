import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PongSpinner } from 'react-spinners-kit';
import { fetchReservations } from '../../redux/reservationsSlice';

const MyReservationsList = () => {
  const dispatch = useDispatch();
  const { reservations, status } = useSelector((state) => state.reservations);
  const userId = useSelector((state) => state.user.user);

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
      dispatch(fetchReservations(userId));
    }
  }, [dispatch, reservations.length]);

  return (
    <>
      {status === 'Loading' && (
          <div className="h-screen flex justify-center items-center w-full">
            <PongSpinner size={100} color="#686769" loading />
          </div>
      )}
      {status === 'fulfilled' && (
        <>
          <div className="flex">
            <div className="navbar-space" />
            <div className="min-h-screen w-full bg-slate-50 pb-6">
              <h1 className="text-center text-4xl text-shadow-title py-6 mb-20 font-ace text-darkGrey">Reservations</h1>
              <div className="flex flex-row flex-wrap justify-center gap-8">
                {reservations.map((reservation) => (
                  <div key={reservation.id} className="flex flex-col items-center">
                    <img
                      src={reservation.vehicle.photo}
                      alt={reservation.vehicle.name}
                      className="w-64 h-40 object-cover"
                    />
                    <div className="bg-reservations w-64 rounded-xl shadow-md p-4">
                      <p className="text-gray-700 font-bold text-lg">{reservation.vehicle.name}</p>
                      <p className="text-gray-500 text-sm">{reservation.vehicle.description}</p>
                      <p className="text-gray-500 font-bold text-sm">{reservation.city}</p>
                      <p className="text-gray-500 font-bold text-lg">{formatEventDate(reservation.event_date)}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyReservationsList;
