import React from 'react';
import { render } from '@testing-library/react';
import Home from '@pages/index';
import Register from '@pages/register';
import Login from '@pages/login';
import Dashboard from '@pages/dashboard';
import Custom404 from '@pages/404';

it('renders homepage unchanged', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it('renders register page unchanged', () => {
  const { container } = render(<Register />);
  expect(container).toMatchSnapshot();
});

it('renders login page unchanged', () => {
  const { container } = render(<Login />);
  expect(container).toMatchSnapshot();
});

it('renders error 404 page unchanged', () => {
  const { container } = render(<Custom404 />);
  expect(container).toMatchSnapshot();
});

it('renders dashboard page unchanged', () => {
  const { container } = render(<Dashboard />);
  expect(container).toMatchSnapshot();
});
