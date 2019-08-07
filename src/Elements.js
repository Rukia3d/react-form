import React from 'react';

const Text = ({ label, id }) => (
  <input type="text" name={label} id={id} required pattern=" " />
)

export default {Text}
