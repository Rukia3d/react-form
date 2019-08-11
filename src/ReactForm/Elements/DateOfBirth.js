import React from 'react';
import PropTypes from 'prop-types';


/*
DateOfBirth element implements data input that requires the age to be
more than 18 years old
*/

const MIN_AGE = 18;

const DateOfBirth = ({ label, id, updateData }) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - MIN_AGE);
  return (
    <input
      type="date"
      name={label}
      id={id}
      required
      max={date.toJSON().slice(0, 10)}
      onChange={event => updateData(id, event.target.value)}
    />
  );
};

DateOfBirth.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default DateOfBirth;
