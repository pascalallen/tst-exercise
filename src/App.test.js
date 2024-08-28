import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TST text', () => {
  render(<App />);
  const h1Element = screen.getByText(/TST coding exercise/i);
  expect(h1Element).toBeInTheDocument();
});
