import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { PongSpinner } from 'react-spinners-kit';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getVehiclesInfo } from '../../redux/vehicleSlice';
import { postReservation } from '../../redux/reservationsSlice';

const NewReservation = () => {
  const location = useLocation();
  const { vehicleId } = useParams();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicles);

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (vehicle.vehicles.length === 0) {
      dispatch(getVehiclesInfo());
    }
  }, [dispatch, vehicle.vehicles.length]);

  return (
    <>
      {vehicle.status === 'Loading' && <div className="h-screen flex justify-center items-center"><PongSpinner size={100} color="#686769" loading /></div> }
      {vehicle.status === 'fulfilled' && (
        <>
          <div className="h-full w-full bg-new-reservation">
            <div className="bg-image-new-reservation w-full h-full grid place-content-center">
              <section className="form-new-reservation-bg flex flex-col justify-center items-center sm:max-w-5xl sm:w-4/5 lg:px-6">
                <h1 className="font-ace text-2xl text-white text-shadow-title text-center">Make a Reservation</h1>
                <div className="bg-white h-1px w-5/6 max-w-xs my-5" />
                <p className="text-white text-center w-11/12 text-shadow-title">
                  In our company we provide the best automobile service 
                  for our clients, choose to feel like you are flying with us. 
                  If you want to find out if a
                  reservation is available in your area,
                  please use the selector below.
                </p>
                <form
                  onSubmit={handleSubmit((data) => dispatch(postReservation({ ...data, vehicle_id: parseInt(data.vehicle_id, 10), user_id: user })))}
                  className="flex flex-col gap-7 items-center mt-5 w-full lg:flex-row"
                >
                  <div className="w-11/12 flex flex-col items-center gap-1">
                    <span className="font-bold text-red-600">{errors.city?.message}</span>
                    <select
                      {...register('city', { required: 'Please select a city.' })}
                      type="text"
                      placeholder="City"
                      className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full"
                    >
                      <option className="bg-zinc-800" value=""> Select a City </option>
                      <option className="bg-zinc-800" value="Cordoba, Argentina"> Cordoba, Argentina </option>
                      <option className="bg-zinc-800" value="Barquisimeto, Venezuela"> Barquisimeto, Venezuela </option>
                      <option className="bg-zinc-800" value="Carabobo, Venezuela"> Carabobo, Venezuela </option>
                      <option className="bg-zinc-800" value="Ibagué, Colombia"> Ibagué, Colombia </option>
                    </select>
                  </div>
                  <div className="w-11/12 flex flex-col items-center gap-1">
                    <span className="font-bold text-red-600">{errors.event_date?.message}</span>
                    <input
                      {...register('event_date', { required: 'Please select a date.' })}
                      type="datetime-local"
                      name="event_date"
                      placeholder="Date"
                      min={new Date().toISOString().split(' ')[0]}
                      className="w-full font-roboto shadow-md border-white rounded-full bg-transparent text-white input-date py-4"
                    />
                  </div>
                  <div className="w-11/12 flex flex-col items-center gap-1">
                    <span className="font-bold text-red-600">{errors.vehicle_id?.message}</span>
                    { location.pathname === '/reserve' ? (
                      <select
                        {...register('vehicle_id', { required: 'Please select a vehicle.' })}
                        type="text"
                        placeholder="Vehicle"
                        className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-11/12"
                      >
                        <option className="bg-zinc-800" value=""> Select a Vehicle </option>
                        {vehicle.vehicles.map((vehicle) => (
                          <option key={vehicle.id} value={vehicle.id} className="bg-zinc-800">
                            {' '}
                            {vehicle.name}
                            {' '}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <select
                        {...register('vehicle_id', { required: 'Please select a vehicle.' })}
                        type="text"
                        placeholder="Vehicle"
                        className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-11/12"
                      >
                        {vehicle.vehicles.map((vehicle) => {
                          if (vehicle.id === parseInt(vehicleId, 10)) {
                            return (
                              <option key={vehicle.id} value={vehicle.id} className="bg-zinc-800">
                                {' '}
                                {vehicle.name}
                                {' '}
                              </option>
                            );
                          }
                          return null;
                        })}
                      </select>
                    ) }
                  </div>
                  <button
                    type="submit"
                    className="font-roboto font-medium w-4/5 max-w-xs transition-scale text-primaryGreen
                  bg-white border-white py-4 px-8 rounded-full md:w-60"
                  >
                    Reserve
                  </button>
                </form>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NewReservation;
