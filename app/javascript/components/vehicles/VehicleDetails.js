import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { PongSpinner } from 'react-spinners-kit';
import { AiOutlineLeft, AiOutlineRightCircle } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { BsCarFrontFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { getVehiclesInfo } from '../../redux/vehicleSlice';
import useWindowResize from '../hooks/useWindowResize';
import PriceList from './PriceList';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VehicleDetails = () => {
  const vehicle = useSelector((state) => state.vehicles);
  const user = useSelector((state) => state.user);
  const { width } = useWindowResize();
  const { vehicleId } = useParams();
  const dispatch = useDispatch();
  const vehicleDetails = vehicle.vehicles.find(
    (vehicle) => vehicle.id === parseInt(vehicleId, 10),
  );

  useEffect(() => {
    if (vehicle.vehicles.length === 0) {
      dispatch(getVehiclesInfo());
    }
  }, [dispatch, vehicle.vehicles.length]);

  return (
    <>
      {vehicle.status === 'Loading' && (
        <div className="h-screen flex justify-center items-center">
          <PongSpinner size={100} color="#686769" loading />
        </div>
      )}
      {vehicle.status === 'fulfilled' && (
        <>
          <div className="flex">
            <div className="navbar-space flex-grow-0" />
            <div className="pt-8 details-container bg-slate-50 flex-1 overflow-x-hidden">
              {width < 900 ? (
                <div className="w-11/12 m-auto mb-7 flex flex-col justify-center items-center text-center">
                  <h1 className="font-ace text-3xl text-black text-shadow-title mb-2">
                    {vehicleDetails.name}
                  </h1>
                  <p className="font-roboto text-shadow-title">
                    {vehicleDetails.description}
                  </p>
                  <div className="w-24 bg-primaryGreen mt-4 h-1px" />
                </div>
              ) : null}
              <div className="relative details-photo-container max-w-full pb-16">
                <Swiper
                  id="always-be-swipin"
                  className="swiper-container"
                  direction="horizontal"
                  loop
                  effect="fade"
                  pagination={{
                    dynamicBullets: true,
                  }}
                  navigation
                  modules={[Pagination, Navigation]}
                >
                  <SwiperSlide>
                    <img
                      className="w-full"
                      src={vehicleDetails.photo}
                      alt={`Vehicle (${vehicleDetails.name})`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full"
                      src={vehicleDetails.photo_back}
                      alt={`Vehicle (${vehicleDetails.name})`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full"
                      src={vehicleDetails.photo_left}
                      alt={`Vehicle (${vehicleDetails.name})`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full"
                      src={vehicleDetails.photo_right}
                      alt={`Vehicle (${vehicleDetails.name})`}
                    />
                  </SwiperSlide>
                </Swiper>
                <Link to="/vehicles" className="detailsBack">
                  <AiOutlineLeft className="text-2xl" />
                </Link>
              </div>
              <div className="w-11/12 m-auto flex flex-col justify-center mb-16 md:my-auto md:mx-8 details-right-container">
                {width > 900 ? (
                  <div className="w-11/12 m-auto mb-7 flex flex-col justify-end items-end text-right">
                    <h1 className="font-ace text-4xl text-black text-right text-shadow-title mb-2 title-desktop">
                      {vehicleDetails.name}
                    </h1>
                    <p className="font-roboto text-shadow-title text-right">
                      {vehicleDetails.description}
                    </p>
                    <div className="w-24 bg-primaryGreen mt-4 h-1px" />
                  </div>
                ) : null}
                <section className="lg:w-full">
                  <PriceList price={vehicleDetails.price} />
                </section>
                {user.user !== -1 && (
                  <>
                    <p className="font-roboto font-medium text-lg text-gray-400 text-center mb-2">
                      Do you want to make a reservation?
                    </p>
                    <Link
                      to={`/details/${vehicleId}/reserve`}
                      className="green-button font-roboto w-52 self-center mb-12"
                    >
                      <BsCarFrontFill className="text-xl" />
                      Reserve
                      {' '}
                      <AiOutlineRightCircle className="text-2xl" />
                    </Link>
                  </>
                )}
                {user.user === -1 && (
                  <>
                    <p className="font-roboto font-medium text-lg text-gray-400 text-center mb-2">
                      To make a reservation you have to Login first:
                    </p>
                    <Link
                      to="/log-in"
                      className="green-button flex items-center justify-center font-roboto w-52 self-center mb-12"
                    >
                      Login
                      {' '}
                      <BiLogIn className="text-2xl" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VehicleDetails;
