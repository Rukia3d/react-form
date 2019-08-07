import React from 'react';
import ReactDOM from 'react-dom';
import Elements from './Elements';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

let input = [
  { id: "name", type: "text", label: "Name" },
  { id: "dob", type: "date", label: "DOB" },
  { id: "gender", type: "gender", label: "Gender" },
]

test('correct name', () => {
  const { getByLabelText } = render(
    <div>
    <label htmlFor="name">Name</label>
    <Elements.Text lavel="Name" id="name" />
    </div>
  );

  const inputName = getByLabelText("Name");
  inputName.value = "";
  expect(inputName.checkValidity()).toBe(false);

  inputName.value = "Joe";
  expect(inputName.checkValidity()).toBe(false);

  inputName.value = "Joe Doe";
  expect(inputName.checkValidity()).toBe(true);
});
