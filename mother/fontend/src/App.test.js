import { render, screen } from '@testing-library/react';
import App from './Component/App';
import AppMidwife from './AppMidwife';

test('renders learn react link', () => {
  render(<AppMidwife />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
