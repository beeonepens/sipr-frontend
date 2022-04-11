import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/dashboard';

describe('Dashboard', () => {
  it('show a header title', () => {
    render(<Dashboard />);

    const headerTitle = screen.getByText('Today');

    expect(headerTitle).toBeInTheDocument();
  });

  it('show a create button', () => {
    render(<Dashboard />);

    const pageContent = screen.getByRole('button', { name: 'Create' });

    expect(pageContent).toBeInTheDocument();
  });
});
