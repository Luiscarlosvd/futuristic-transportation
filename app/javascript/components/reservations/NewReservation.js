import React from 'react';

const NewReservation = () => {
  return (
    <div className='h-screen w-full bg-new-reservation'>
      <div className="bg-image-new-reservation w-full h-screen grid place-content-center">
        <section className='flex flex-col justify-center items-center'>
          <h1 className='font-ace text-2xl text-white text-shadow-title'>Make a Reservation</h1>
          <div className='bg-white h-1px w-5/6 max-w-xs'></div>
        </section>
      </div>
    </div>
  );
};

export default NewReservation;
