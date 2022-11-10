import { render, screen } from '@testing-library/react';
import Header from './Header';

jest.mock('react-router-dom', () => ({
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
}));

test('Header', () => {
  render(<Header />);

  screen.getByText(/Cocheline/);
  screen.getByText(/입문자/);
  screen.getByText(/주니어/);
  screen.getByText(/이벤트/);
  screen.getByText(/스터디/);
  screen.getByText(/잡담소/);
});
