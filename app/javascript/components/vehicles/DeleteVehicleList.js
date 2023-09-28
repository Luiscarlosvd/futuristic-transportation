import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVehiclesInfo, deleteVehicle } from "../../redux/vehicleSlice";
import { toast } from "react-hot-toast";
import { PongSpinner } from 'react-spinners-kit';

const DeleteVehicleList = () => {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(getVehiclesInfo());
  }, [dispatch]);

  const handleDelete = (itemId) => {
    dispatch(deleteVehicle(itemId));
    toast.success("Vehicle Deleted!");
  };

  return (
    <>
      {vehicle.status === 'Loading' && <div className="h-screen flex justify-center items-center"><PongSpinner size={100} color="#686769" loading /></div> }
      {vehicle.status === 'fulfilled' && (
        <>
          <div className="">
            <div className="">
              <h1 className="">Remove Vehicles</h1>
              <p className="">Please select a vehicle to remove from the list.</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteVehicleList;
