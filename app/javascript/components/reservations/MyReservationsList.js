import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservationsSlice';

const MyReservationsList = () => {
  const dispatch = useDispatch();
  const { reservations, status, error } = useSelector(
    (store) => store.reservations
  );

  useEffect(() => {
    if (reservations.length === 0) {
      dispatch(fetchReservations());
    }
  }, []);

  console.log(reservations, status, error);

  return (
    <div className="flex">
      <div className="navbar-space" />
      <div className="min-h-screen">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="reservationContainer">
            <h2>{reservation.city}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReservationsList;
