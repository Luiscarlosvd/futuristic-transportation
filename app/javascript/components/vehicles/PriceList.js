import React from 'react';
import PropTypes from 'prop-types';

const PriceList = ({ price }) => {
  const financeFee = (price) => (price / 48).toFixed(2);

  const reserveForDay = (price) => (price / 365).toFixed(2);

  return (
    <div className="my-6 font-roboto text-lg shadow-md price-list-container">
      <div className="price-list">
        <p>Finance fee</p>
        <p className="font-bold">
          $
          {financeFee(price)}
        </p>
      </div>
      <div className="price-list">
        <p>Total amount payable</p>
        <p className="font-bold">
          $
          {price}
        </p>
      </div>
      <div className="price-list">
        <p>Duration</p>
        <p className="font-bold">48 Months</p>
      </div>
      <div className="price-list">
        <p>Reserve for a day</p>
        <p className="font-bold">
          $
          {reserveForDay(price)}
        </p>
      </div>
    </div>
  );
};

PriceList.propTypes = {
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default PriceList;
