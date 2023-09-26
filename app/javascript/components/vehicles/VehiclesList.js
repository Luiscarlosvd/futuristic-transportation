import React, { useState } from 'react';
import VehicleCard from './VehicleCard';
import { TbTriangle } from 'react-icons/tb';
import { useSelector } from 'react-redux';
// import { PongSpinner } from 'react-spinners-kit';

const VehiclesList = () => {
  const vehicles = useSelector((state) => state.vehicles);
  const pagesQuantity = Math.ceil(vehicles.vehicles.length / 3)
  const [page, setPage] = useState(0)

  const slideForward = () => {
    if (page < pagesQuantity - 1) {
      setPage(page + 1) 
    }
  }

  const slideBack = () => {
    if ( page > 0 ) {
      setPage(page - 1)
    }
  }

  return (
    <div className='flex'>
      <div className='navbar-space' />
      <div className='flex flex-col gap-10 min-h-screen w-full justify-center bg-slate-50'>
        <div className='flex flex-col items-center gap-3 mx-auto'>
          <h1 className='text-slate-700'>Latest Models</h1>
          <p>Please select a Vehicle</p>
        </div>
        <p className='text-center'>----------- divisor----------</p>
        <div className='flex items-center justify-around gap-8'>
          <div className={`slide mr-auto pl-8 pr-3 py-3 rounded-r-full bg-primaryGreen ${(page === 0) ? "gray-bg" : ""}`}>
            <TbTriangle className="text-l text-white -rotate-90" onClick={() => {slideBack()}} />
          </div>
          <VehicleCard name='Vehicle1' description="Hola como estas" image="https://hola.com"/>
          <VehicleCard name='Vehicle2' description="Hola como estas!" image="https://holis.com"/>
          <VehicleCard name='Vehicle3' description="Hola como estas!!" image="https://holass.com"/>
          <div className={`slide ml-auto pr-8 pl-3 py-3 rounded-l-full bg-primaryGreen ${(page === pagesQuantity - 1) ? "gray-bg" : ""}`}>
            <TbTriangle className="text-l text-white rotate-90" onClick={() => {slideForward()}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehiclesList;
