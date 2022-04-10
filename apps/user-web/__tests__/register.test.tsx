import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Register from '../pages/register';

describe('Register', () => {
  it('render a subtitle', () => {
    render(<Register />);

    const subtitle = screen.getByRole('heading', {
      name: /Create your free account/i,
    });

    expect(subtitle).toBeInTheDocument();
  });
});
