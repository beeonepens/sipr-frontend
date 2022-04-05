import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from '../pages/login';

describe('Login', () => {
  it('render a subtitle', () => {
    render(<Login />);

    const subtitle = screen.getByRole('heading', {
      name: /Welcome back!/i,
    });

    expect(subtitle).toBeInTheDocument();
  });
});
