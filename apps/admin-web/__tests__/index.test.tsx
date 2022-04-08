import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages';

describe('HomePage', () => {
  it('render a heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', {
      name: /SIPR Admin Page/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
