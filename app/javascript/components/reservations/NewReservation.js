import React from 'react';
import { useEffect } from "react";
import { PongSpinner } from 'react-spinners-kit';
import { useDispatch, useSelector } from 'react-redux';
import { getVehiclesInfo } from '../../redux/vehicleSlice';

const NewReservation = () => {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(getVehiclesInfo());
  }, [dispatch]);

  return (
    <>
      {vehicle.status === 'Loading' && <div className="h-screen flex justify-center items-center"><PongSpinner size={100} color="#686769" loading /></div> }
      {vehicle.status === 'fulfilled' && (
        <>
          <div className='h-full w-full bg-new-reservation'>
            <div className="bg-image-new-reservation w-full h-full grid place-content-center">
              <section className='form-new-reservation-bg flex flex-col justify-center items-center sm:max-w-5xl sm:w-4/5 lg:px-6'>
                <h1 className='font-ace text-2xl text-white text-shadow-title text-center'>Make a Reservation</h1>
                <div className='bg-white h-1px w-5/6 max-w-xs my-5'></div>
                <p className='text-white text-center w-11/12 text-shadow-title'>
                  In our catalog we have availability of 20 vehicles and the ability 
                  to create any vehicle that you imagine completely tailored to your needs 
                  if you wish to purchase it. The future is today and we can create whatever 
                  your mind imagines. If you want to find out if a reservation is available in your area, 
                  please use the selector below.
                </p>
                <form className="flex flex-col gap-7 items-center mt-5 w-full lg:flex-row" >
                  <select type="text" placeholder="City" className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-11/12" >
                    <option className="bg-zinc-800" value="" disabled > Select a City </option>
                    <option className='bg-zinc-800' value="Cordoba" > Cordoba, Argentina </option>
                    <option className='bg-zinc-800' value="Barquisimeto" > Barquisimeto, Venezuela </option>
                    <option className='bg-zinc-800' value="Carabobo" > Carabobo, Venezuela </option>
                    <option className='bg-zinc-800' value= "Medellin" > Medellin, Colombia </option>
                  </select>
                  <div className="w-11/12 flex justify-start relative">
                    <input
                      required={true}
                      type="date"
                      name="date"
                      placeholder="Date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full font-roboto shadow-md border-white rounded-full bg-transparent text-white input-date py-4"
                    />
                  </div>
                  <select type="text" placeholder="Vehicle" className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-11/12" >
                    <option className="bg-zinc-800" value="" disabled > Select a Vehicle </option>
                    {vehicle.vehicles.map((vehicle) => (
                      <option key={vehicle.id} value={vehicle.id} className="bg-zinc-800"> {vehicle.name} </option>
                    ))}
                  </select>
                  <button type="submit" className="font-roboto font-medium w-4/5 max-w-xs transition-scale text-primaryGreen
                  bg-white border-white py-4 px-8 rounded-full md:w-60"> 
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
