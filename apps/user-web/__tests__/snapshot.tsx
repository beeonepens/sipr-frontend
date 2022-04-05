import React from 'react';
import { render } from '@testing-library/react';
import Home from '@pages/index';
import Register from '@pages/register';

it('renders homepage unchanged', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it('renders register page unchanged', () => {
  const { container } = render(<Register />);
  expect(container).toMatchSnapshot();
});
