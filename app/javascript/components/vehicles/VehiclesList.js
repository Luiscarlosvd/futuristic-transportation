import React, { useState, useRef, useEffect } from "react";
import VehicleCard from "./VehicleCard";
import { TbTriangle } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { getVehiclesInfo } from "../../redux/vehicleSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { PongSpinner } from "react-spinners-kit";

import "swiper/css";
import Divisor from "./Divisor";

const VehiclesList = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles);

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

  useEffect(() => {
    if (vehicles.vehicles.length === 0) {
      dispatch(getVehiclesInfo());
    }
  }, []);

  return (
    <>
      {vehicles.status === "Loading" && (
        <div className="h-screen flex justify-center items-center">
          <PongSpinner size={100} color="#686769" loading />
        </div>
      )}
      {vehicles.status === "fulfilled" && (
        <div className="flex w-screen">
          <div className="navbar-space" />
          <div className="flex flex-col gap-10 min-h-screen vehicles-content justify-center bg-slate-50">
            <div className="flex flex-col items-center gap-3 mx-auto">
              <h1 className="text-darkGrey text-4xl font-ace">Latest Models</h1>
              <p className="font-roboto text-gray-400 font-semibold text-sm">
                Please select a Vehicle
              </p>
            </div>
            <Divisor quantity={15} />
            <div className="flex items-center justify-center w-full gap-8">
              <div
                className={`slide mr-auto pl-8 pr-3 py-3 rounded-r-full bg-primaryGreen ${
                  listStart ? "gray-bg" : ""
                }`}
              >
                <TbTriangle
                  className="text-l text-white -rotate-90"
                  onClick={() => {
                    slideBack();
                  }}
                />
              </div>
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
                {vehicles.vehicles.map((vehicle) => (
                  <SwiperSlide key={vehicle.id}>
                    <Link to={`/details/${vehicle.id}`}>
                      <VehicleCard
                        id={vehicle.id}
                        name={vehicle.name}
                        description={vehicle.description}
                        price={vehicle.price}
                        photo={vehicle.photo}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                className={`slide ml-auto pr-8 pl-3 py-3 rounded-l-full bg-primaryGreen ${
                  listEnd ? "gray-bg" : ""
                }`}
              >
                <TbTriangle
                  className="text-l text-white rotate-90"
                  onClick={() => {
                    slideForward();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VehiclesList;
