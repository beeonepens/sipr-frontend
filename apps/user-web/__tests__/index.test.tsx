import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('render a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /User Client/i,
    });

    expect(heading).toBeInTheDocument();
  });
});