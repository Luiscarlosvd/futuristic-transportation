import React, { useEffect } from "react";
import { PongSpinner } from 'react-spinners-kit';
import { useDispatch, useSelector } from "react-redux";
import { getVehiclesInfo, deleteVehicle } from "../../redux/vehicleSlice";


const DeleteVehicleList = () => {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(getVehiclesInfo());
  }, [dispatch]);

  const handleDelete = (itemId) => {
    dispatch(deleteVehicle(itemId));
  };

  return (
    <>
      {vehicle.status === 'Loading' && <div className="h-screen flex justify-center items-center"><PongSpinner size={100} color="#686769" loading /></div> }
      {vehicle.status === 'fulfilled' && (
      <section>
          <h1 className="">Please select a vehicle to remove from the list.</h1>
        <ul>
          {vehicle.vehicles.map((vehicle) => (
            <li>
              <h3>model: {vehicle.name}</h3>
              <img className="" src={vehicle.photo} alt={vehicle.name} />
              <button onClick={() => handleDelete(vehicle.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
       )}
    </>
  );
};

export default DeleteVehicleList;
