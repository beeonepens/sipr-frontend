// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
import { expect, test, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Custom404 from '../pages/404';

// describe('Custom404', () => {
test('Custom404', () => {
  it('render an error message', () => {
    render(<Custom404 />);

    const code = screen.getByText('404');
    const description = screen.getByText('This page could not be found.');

    expect(code && description).toBeInTheDocument();
  });
});
