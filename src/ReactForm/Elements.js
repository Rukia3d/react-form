import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ label, id }) => (
  <input type="text" name={label} id={id} required pattern="\S+ \S+.*" />
);

Text.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const MIN_AGE = 18;
const DateOfBirth = ({ label, id }) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - MIN_AGE);
  return <input type="date" name={label} id={id} required max={date.toJSON().slice(0, 10)} />;
};

DateOfBirth.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const Gender = ({ label, id }) => (
  <select name={label} id={id}>
    <option value="0">------</option>
    <option value="1">Male</option>
    <option value="2">Female</option>
  </select>
);

Gender.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};


export default { Text, DateOfBirth, Gender };
