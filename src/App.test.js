import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('renders without crashing', () => {
  const { getByText } = render(
    <App />
  );
});
