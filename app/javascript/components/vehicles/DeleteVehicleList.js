import React, { useState, useRef, useEffect } from 'react';
import { PongSpinner } from 'react-spinners-kit';
import { TbTriangle } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getVehiclesInfo } from '../../redux/vehicleSlice';
import VehicleDeleteCard from './VehicleDeleteCard';
import Divisor from './Divisor';

const DeleteVehicleList = () => {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicles);

  useEffect(() => {
    if (vehicle.vehicles?.length === 0) {
      dispatch(getVehiclesInfo());
    }
  }, []);

  const [listStart, setListStart] = useState(true);
  const [listEnd, setListEnd] = useState(false);
  const swiperRef = useRef();

  const slideForward = () => {
    if (!listEnd) {
      swiperRef.current.slideNext();
      if (swiperRef.current.isEnd) {
        setListEnd(true);
      }
    }
    if (listStart) {
      setListStart(false);
    }
  };

  const slideBack = () => {
    if (!listStart) {
      swiperRef.current.slidePrev();
      if (swiperRef.current.isBeginning) {
        setListStart(true);
      }
    }
    if (listEnd) {
      setListEnd(false);
    }
  };

  return (
    <>
      {vehicle.status === 'Loading' && (
      <div className="h-screen flex justify-center items-center">
        <PongSpinner size={100} color="#686769" loading />
      </div>
      )}
      {vehicle.status === 'fulfilled' && vehicle.vehicles?.length > 0 && (
      <div className="flex w-screen">
        <div className="navbar-space" />
        <div className="flex flex-col gap-10 min-h-screen vehicles-content justify-center bg-slate-50">
          <div className="flex flex-col items-center gap-3 mx-auto">
            <h1 className="text-darkGrey text-4xl font-ace text-shadow-title">
              Delete a vehicle
            </h1>
            <p className="font-roboto text-gray-400 font-semibold text-sm">
              Please select a Vehicle
            </p>
          </div>
          <Divisor quantity={15} />
          <div className="flex items-center justify-center w-full gap-8">
            <button
              type="button"
              className={`slide mr-auto pl-8 pr-3 py-3 rounded-r-full bg-primaryGreen ${
                listStart ? 'gray-bg' : ''
              }`}
              onClick={() => {
                slideBack();
              }}
            >
              <TbTriangle className="text-l text-white -rotate-90" />
            </button>
            <Swiper
              id="always-be-swipin"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="swiper-container"
              direction="horizontal"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 100,
                  allowTouchMove: true,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 100,
                  allowTouchMove: false,
                },
                890: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  allowTouchMove: false,
                },
                1180: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                  allowTouchMove: false,
                },
              }}
            >
              {vehicle.vehicles.map((vehicle) => (
                <SwiperSlide key={vehicle.id}>
                  <VehicleDeleteCard
                    id={vehicle.id}
                    name={vehicle.name}
                    description={vehicle.description}
                    photo={vehicle.photo}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              className={`slide ml-auto pr-8 pl-3 py-3 rounded-l-full bg-primaryGreen ${
                listEnd ? 'gray-bg' : ''
              }`}
              onClick={() => {
                slideForward();
              }}
            >
              <TbTriangle className="text-l text-white rotate-90" />
            </button>
          </div>
        </div>
      </div>
      )}
      {vehicle.status === 'fulfilled' && !vehicle.vehicles && (
      <div className="flex w-screen">
        <div className="navbar-space" />
        <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-20">
          <h2 className="text-darkGrey font-ace text-center text-xl">
            There are not any cars to show yet.
          </h2>
        </div>
      </div>
      )}
    </>
  );
};

export default DeleteVehicleList;
