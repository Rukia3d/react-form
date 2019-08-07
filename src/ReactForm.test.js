import React from 'react';
import ReactDOM from 'react-dom';
import ReactForm from './ReactForm';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('renders without crashing', () => {
  const { getByText } = render(
    <ReactForm />
  );
});
