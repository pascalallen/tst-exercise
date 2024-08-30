import { render, screen } from '@testing-library/react';
import IndexPage from './IndexPage';

test('renders TST text', () => {
  render(<IndexPage />);
  const h1Element = screen.getByText(/TST coding exercise/i);
  expect(h1Element).toBeInTheDocument();
});
