import React from 'react';
import { TbPointFilled } from 'react-icons/tb';
import PropTypes from 'prop-types';

const Divisor = ({ quantity }) => {
  let dots = Array(quantity).fill(null);
  dots = dots.map((dot, index) => <TbPointFilled key={`${index * quantity}`} />);

  return (
    <div className="flex gap-0 text-gray-200 mx-auto text-xs">
      {dots}
    </div>
  );
};

Divisor.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Divisor;
