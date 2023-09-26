import React from 'react';

const VehicleCard = ( { name, description, image } ) => (
  <div className='flex flex-col items-center justify-center gap-3'>
    <p>{image}</p>
    <h3 className='font-ace'>{name}</h3>
    <p>{description}</p>
    <p>media</p>

  </div>
);

export default VehicleCard;