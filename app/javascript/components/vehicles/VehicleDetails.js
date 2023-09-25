import React from 'react';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { PongSpinner } from "react-spinners-kit";
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
          <div>
            <h1>{vehicleDetails.name}</h1>
            <p>{vehicleDetails.description}</p>
            <img src={vehicleDetails.photo} alt='Photo Vehicle' />
            <h2>{vehicleId}</h2>
            <Link to={`/details/${vehicleId}/reserve`} className="green-button font-roboto w-52">
              <BsCarFrontFill className="text-xl" />
              Reserve
              {' '}
              <AiOutlineRightCircle className="text-2xl" />
            </Link>
          </div>
          <div>
            <Link to="/vehicles" className="detailsBack ">
              <AiOutlineLeft className='text-2xl' />
            </Link>
          </div>
        </>
      }
    </>
  );
};

export default VehicleDetails;
