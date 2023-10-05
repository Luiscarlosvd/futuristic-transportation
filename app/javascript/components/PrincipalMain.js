import React from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { BsCarFrontFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';

const PrincipalMain = () => (
  <div className="w-full relative h-screen flex items-start justify-center bg-main">
    <div className="w-full h-screen flex items-start justify-center home-img max-w-4xl">
      <span className="bg-white rounded-full py-2 px-4 absolute right-6 top-4"><ImSearch className="text-darkOrange text-2xl" /></span>
      <div className="container home-title mt-32 flex flex-col justify-center gap-5 items-center">
        <h1 className="font-ace text-5xl text-white text-center text-shadow-title px-3">Luxury Speedsters</h1>
        <Link to="/vehicles" className="green-button font-roboto">
          <BsCarFrontFill className="text-xl" />
          See more
          {' '}
          <AiOutlineRightCircle className="text-2xl" />
        </Link>
      </div>
    </div>
  </div>
);

export default PrincipalMain;
