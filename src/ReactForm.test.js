import React from 'react';
import ReactDOM from 'react-dom';
import ReactForm from './ReactForm';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

let input = [
  { name: "textForm" },
  { dob: "textForm" },
  { gender: "textForm" },
]

let output = {
    name: "John Foo",
    dob: "1990-01-01",
    gender: 1,
    contact: [{
        type: "mobile",
        value: "0400123123"
    },{
        type: "home",
        value: "610000000"
    }],
    guardian: {
        name: "Jane Foo",
        contact: "0400123123"
    }
}


test('submitting the form', () => {
  const onSubmit = jest.fn();
  const { getByText, getByLabelText } = render(
    <ReactForm input={ input } output={onSubmit}/>
  );

  const testInput = getByLabelText("Data");
  testInput.value = "data";
  
  fireEvent.click(getByText("Submit"));
  expect(onSubmit.mock.calls.length).toBe(1);
  expect(onSubmit.mock.calls[0]).toEqual(["data"]);
});
