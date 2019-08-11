import React from 'react';
import PropTypes from 'prop-types';

// TODO parse int from the options
const Gender = ({ label, id, updateData }) => (
  <select name={label} id={id} onChange={event => updateData(id, event.target.value)}>
    <option value="0">------</option>
    <option value="1">Male</option>
    <option value="2">Female</option>
  </select>
);

Gender.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default Gender;
