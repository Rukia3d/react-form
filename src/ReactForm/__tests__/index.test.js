import React from 'react';
import { render } from '@testing-library/react';
import ErrorHandler from '../index';

// This will hide the red ugliness in the console when you run this test
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test('error on input for the form', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(
    <ErrorHandler input={'aaa{xxx}'} output={onSubmit} />,
  );

  const errorMessage = getByTestId('errorMessage');
  expect(errorMessage).toBeTruthy();
});
