import React from 'react';
import PropTypes from 'prop-types';

const Gender = ({ label, id, updateData }) => (
  <select
    name={label}
    id={id}
    onChange={event => updateData(id, parseInt(event.target.value, 10))
    }
  >
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
