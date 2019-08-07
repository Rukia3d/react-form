import React from 'react';

const Text = ({ label, id }) => (
  <input type="text" name={label} id={id} required pattern="\S+ \S+.*" />
)

const MIN_AGE = 18
const DateOfBirth = ({ label, id }) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - MIN_AGE);
  return <input type="date" name={label} id={id} required max={date.toJSON().slice(0,10)} />
};

const Gender  = ({ label, id }) => (
  <select name={label} id={id}>
  <option value="0">------</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
  </select>
);

export default { Text, DateOfBirth, Gender }
