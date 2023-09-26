import React, { useState, useRef, useEffect } from 'react';
import VehicleCard from './VehicleCard';
import { TbTriangle } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { PongSpinner } from 'react-spinners-kit';
import 'swiper/css';

const VehiclesList = () => {
  const swiperRef = useRef();
  const vehicles = useSelector((state) => state.vehicles);
  const pagesQuantity = Math.ceil(7 / 3)

  const [listStart, setListStart] = useState(true)
  const [listEnd, setListEnd] = useState(false)

  const slideForward = () => {
    if (!listEnd) {
      swiperRef.current.slideNext()
      if (swiperRef.current.isEnd) {setListEnd(true)} 
    } 
    if (listStart) {
      setListStart(false)
    }
  }

  const slideBack = () => {
    if (!listStart) {
      swiperRef.current.slidePrev()
      if (swiperRef.current.isBeginning) {setListStart(true)}
    }
    if (listEnd) {
      setListEnd(false)
    }
  }

  return (
    <div className='flex w-screen'>
      <div className='navbar-space' />
      <div className='flex flex-col gap-10 min-h-screen vehicles-content justify-center bg-slate-50'>
        <div className='flex flex-col items-center gap-3 mx-auto'>
          <h1 className='text-slate-700'>Latest Models</h1>
          <p>Please select a Vehicle</p>
        </div>
        <p className='text-center'>----------- divisor----------</p>
        <div className='flex items-center justify-center w-full gap-8'>
          <div className={`slide mr-auto pl-8 pr-3 py-3 rounded-r-full bg-primaryGreen ${listStart ? "gray-bg" : ""}`}>
            <TbTriangle className="text-l text-white -rotate-90" onClick={() => {slideBack()}} />
          </div>
          <Swiper
            id='always-be-swipin'
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className='swiper-container'
            spaceBetween={0}
            direction='horizontal'
            slidesPerView={3}
            allowTouchMove={false}
          >
            <SwiperSlide><VehicleCard name='Vehicle1' description="Hola como estas" image="https://hola.com"/></SwiperSlide>
            <SwiperSlide><VehicleCard name='Vehicle2' description="Hola como estas!" image="https://holis.com"/></SwiperSlide>
            <SwiperSlide><VehicleCard name='Vehicle3' description="Hola como estas!!" image="https://holass.com"/></SwiperSlide>
            <SwiperSlide><VehicleCard name='Vehicle3' description="Hola como estas!!" image="https://holass.com"/></SwiperSlide>
            <SwiperSlide><VehicleCard name='Vehicle3' description="Hola como estas!!" image="https://holass.com"/></SwiperSlide>
            <SwiperSlide><VehicleCard name='Vehicle3' description="Hola como estas!!" image="https://holass.com"/></SwiperSlide>
            <SwiperSlide><VehicleCard name='Vehicle3' description="Hola como estas!!" image="https://holass.com"/></SwiperSlide>
      
          </Swiper>
        
          <div className={`slide ml-auto pr-8 pl-3 py-3 rounded-l-full bg-primaryGreen ${listEnd ? "gray-bg" : ""}`}>
            <TbTriangle className="text-l text-white rotate-90" onClick={() => {slideForward()}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehiclesList;
