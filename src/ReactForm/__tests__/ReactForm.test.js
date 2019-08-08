import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ReactForm from '../ReactForm';

afterEach(cleanup);

const input = [
  { id: 'name', type: 'text', label: 'Name' },
  { id: 'dob', type: 'date', label: 'DOB' },
  { id: 'gender', type: 'gender', label: 'Gender' },
  { id: 'contact', type: 'contact', label: 'Contact' },
];

const output = {
  name: 'John Foo',
  dob: '1990-01-01',
  gender: '1',
  contact: [{
    type: 'home',
    value: '610000000',
  }],
};


test('submitting the form', () => {
  const onSubmit = jest.fn();
  const { getByText, getByLabelText } = render(
    <ReactForm input={JSON.stringify(input)} output={onSubmit} />,
  );

  const inputName = getByLabelText('Name');
  fireEvent.change(inputName, { target: { value: 'John Foo' } });

  const inputDOB = getByLabelText('DOB');
  fireEvent.change(inputDOB, { target: { value: '1990-01-01' } });

  const inputGender = getByLabelText('Gender');
  fireEvent.change(inputGender, { target: { value: '1' } });

  const buttonContact = getByText('Add Contact');
  expect(buttonContact).toBeTruthy();

  fireEvent.click(buttonContact);

  const inputType = getByLabelText('Type');
  fireEvent.change(inputType, { target: { value: 'home' } });

  const inputPhone = getByLabelText('Phone');
  fireEvent.change(inputPhone, { target: { value: '610000000' } });

  fireEvent.click(getByText('Submit'));

  expect(onSubmit.mock.calls.length).toBe(1);
  expect(onSubmit.mock.calls[0]).toEqual([output]);
});
