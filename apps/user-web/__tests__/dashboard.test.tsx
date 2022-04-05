import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/dashboard';

describe('Dashboard', () => {
  it('show a header title', () => {
    render(<Dashboard />);

    const headerTitle = screen.getByRole('heading', {
      name: /Dashboard/i,
    });

    expect(headerTitle).toBeInTheDocument();
  });

  it('show a page content', () => {
    render(<Dashboard />);

    const pageContent = screen.getByText(/Dashboard Page/i);

    expect(pageContent).toBeInTheDocument();
  });
});
