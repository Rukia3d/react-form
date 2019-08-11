import React from 'react';
import PropTypes from 'prop-types';

/*
Name element implements text input that requires at least 2 space
separated words to be entered to look like first and last name.
*/

const Name = ({ label, id, updateData }) => (
  <input
    type="text"
    name={label}
    id={id}
    required
    pattern="\S+ \S+.*"
    onChange={event => updateData(id, event.target.value)}
  />
);

Name.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default Name;
