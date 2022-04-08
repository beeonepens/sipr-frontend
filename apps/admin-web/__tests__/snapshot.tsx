import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HomePage from '../pages';

it('renders homepage unchanged', () => {
  const { container } = render(<HomePage />);
  expect(container).toMatchSnapshot();
});
