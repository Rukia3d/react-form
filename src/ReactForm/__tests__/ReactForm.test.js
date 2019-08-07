import React from 'react';
import ReactForm from '../index';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

let input = [
  { id: "name", type: "text", label: "Name" },
  { id: "dob", type: "date", label: "DOB" },
  { id: "gender", type: "gender", label: "Gender" },
]

let output = {
    name: "John Foo",
    dob: "1990-01-01",
    gender: "1"
}


test('submitting the form', () => {
  const onSubmit = jest.fn();
  const { getByText, getByLabelText } = render(
    <ReactForm input={JSON.stringify(input)} output={ onSubmit }/>
  );

  const inputName = getByLabelText("Name");
  inputName.value = "John Foo";

  const inputDOB = getByLabelText("DOB");
  inputDOB.value = "1990-01-01";

  const inputGender = getByLabelText("Gender");
  inputGender.value = "1";

  fireEvent.click(getByText("Submit"));

  expect(onSubmit.mock.calls.length).toBe(1);
  expect(onSubmit.mock.calls[0]).toEqual([output]);
});
