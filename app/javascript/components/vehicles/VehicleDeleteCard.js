import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Divisor from './Divisor';
import { deleteVehicle } from '../../redux/vehicleSlice';

const VehicleDeleteCard = ({
  id, name, description, photo,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch(deleteVehicle(itemId));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 relative">
      <div className="aspect-1 h-40 -z-50 rounded-full mx-auto top-0 bg-slate-200 absolute" />
      <img className="h-40 aspect-auto mt-2" src={photo} alt="Vehicle" />
      <h3>{name}</h3>
      <Divisor quantity={5} />
      <p className="font-roboto text-xs w-3/4 text-center text-gray-400">{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
      <button type="button" className="delete-btn" onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};
VehicleDeleteCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default VehicleDeleteCard;
