import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai'
import Divisor from './Divisor';

const VehicleCard = ( { id, name, description, price, photo } ) => (
  <div className='flex flex-col items-center justify-center gap-3 relative'>
    <div className='aspect-1 h-40 -z-50 rounded-full mx-auto top-0 bg-slate-200 absolute' />
    <img className='h-40 aspect-auto mt-2' src={photo} alt="Vehicle photo"/>
    <h3>{name}</h3>
    <Divisor quantity={5}/>
    <p className='font-roboto text-xs text-gray-400'>{ description }</p>
    <div className='flex items-center gap-3 text-gray-400'>
      <div className='p-1 rounded-full border border-gray-400 cursor-pointer'>
        <BsTwitter />
      </div>
      <div className='p-1 rounded-full border border-gray-400 cursor-pointer'>
        <FaFacebookF />
      </div>
      <div className='p-1 rounded-full border border-gray-400 cursor-pointer'>
        <AiOutlineInstagram />
      </div>
    </div> 
  </div>  
);

export default VehicleCard;