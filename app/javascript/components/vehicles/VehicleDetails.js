import React from 'react';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { PongSpinner } from "react-spinners-kit";
import PriceList from "./PriceList";
import { AiOutlineLeft, AiOutlineRightCircle } from "react-icons/ai";
import { BsCarFrontFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const VehicleDetails = () => {
  const vehicle = useSelector((state) => state.vehicles);
  const { vehicleId } = useParams();
  const vehicleDetails = vehicle.vehicles.find((vehicle) => vehicle.id == vehicleId);

  return (
    <>
      {vehicle.status === "Loading" && <div className='h-screen flex justify-center items-center'><PongSpinner size={100} color="#686769" loading={true} /></div> }
      {vehicle.status === "idle" &&
        <>
          <div className='flex'>
            <div className="navbar-space"></div>
            <div className='mt-8 details-container'>
              { window.innerWidth < 900 ? 
                <div className='w-11/12 m-auto mb-7 flex flex-col justify-center items-center text-center'>
                  <h1 className="font-ace text-5xl text-black text-shadow-title mb-2">{vehicleDetails.name}</h1>
                  <p className='font-roboto text-shadow-title'>{vehicleDetails.description}</p>
                  <div className='w-24 bg-primaryGreen mt-4 h-1px'></div>
                </div> : null }
              <div className='relative details-photo-container'>
                <img src={vehicleDetails.photo} alt={`Photo vehicle (${vehicleDetails.name})`} />
                <Link to="/vehicles" className="detailsBack">
                  <AiOutlineLeft className='text-2xl' />
                </Link>
              </div>
              <div className='w-11/12 m-auto flex flex-col justify-center mb-16 md:my-auto md:mx-8 details-right-container'>
                { window.innerWidth > 900 ?
                  <div className='w-11/12 m-auto mb-7 flex flex-col justify-end items-end text-right'>
                    <h1 className="font-ace text-5xl text-black text-right text-shadow-title mb-2">{vehicleDetails.name}</h1>
                    <p className='font-roboto text-shadow-title text-right'>{vehicleDetails.description}</p>
                    <div className='w-24 bg-primaryGreen mt-4 h-1px'></div>
                  </div>
                  : null }
                <section className='lg:w-full'>
                  <PriceList price={vehicleDetails.price} />
                </section>
                <p className='font-roboto font-medium text-lg text-gray-400 text-center mb-2'>Do you want to make a reservation?</p>
                <Link to={`/details/${vehicleId}/reserve`} className="green-button font-roboto w-52 self-center mb-12">
                  <BsCarFrontFill className="text-xl" />
                  Reserve
                  {' '}
                  <AiOutlineRightCircle className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default VehicleDetails;
