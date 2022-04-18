// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
import { expect, test, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from '../pages/index';

// describe('Home', () => {
test('Home', () => {
  it('render a heading', () => {
    render(<Home />);
    const article = within(screen.getByRole('article'));

    const heading = article.getByRole('heading', {
      level: 1,
      name: /Sistem Informasi Penjadwalan Rapat/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
