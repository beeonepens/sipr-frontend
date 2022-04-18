import { expect, test, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages';

test('HomePage', () => {
  it('render a heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /SIPR Admin Page/i,
    });

    expect(heading).toBeDefined();
  });
});
