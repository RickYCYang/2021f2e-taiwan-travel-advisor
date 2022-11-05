import { cleanup, render, screen } from '@testing-library/react';
import App from 'App';

describe('/App', () => {
  beforeEach(cleanup);

  test('Header', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument;
  });

  test('Home', () => {
    render(<App />);
    expect(screen.getByTestId('banner').firstChild).toHaveClass('lg:bg-home');
  });
});
