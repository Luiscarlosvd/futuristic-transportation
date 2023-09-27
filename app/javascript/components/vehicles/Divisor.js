import React from 'react';
import { TbPointFilled } from 'react-icons/tb'

const Divisor = ({ quantity }) => {
  let dots = Array(quantity).fill(null);
  
  dots = dots.map((dot, index) => <TbPointFilled key={index} />);
  
  return (
  <div className='flex gap-0 text-gray-200 mx-auto text-xs'>
    {dots}
  </div>
);
}

export default Divisor;