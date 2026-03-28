import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Semiglobe Brasil', () => {
  render(<App />);
  const el = screen.getByText(/SEMIGLOBE/i);
  expect(el).toBeInTheDocument();
});
