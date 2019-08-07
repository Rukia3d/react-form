import React from 'react';
import ReactDOM from 'react-dom';
import Elements from './Elements';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('correct name', () => {
  const { getByLabelText } = render(
    <div>
    <label htmlFor="name">Name</label>
    <Elements.Text label="Name" id="name" />
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

test('correct DOB', () => {
  const { getByLabelText } = render(
    <div>
    <label htmlFor="dob">DOB</label>
    <Elements.Text label="DOB" id="dob" />
    </div>
  );

  const inputDate = getByLabelText("DOB");
  inputDate.value = "";
  expect(inputDate.checkValidity()).toBe(false);

  inputDate.value = "Joe";
  expect(inputDate.checkValidity()).toBe(false);

  inputDate.value = "2010-01-01";
  expect(inputDate.checkValidity()).toBe(false);

  inputDate.value = "2001-01-01";
  expect(inputDate.checkValidity()).toBe(true);
});
