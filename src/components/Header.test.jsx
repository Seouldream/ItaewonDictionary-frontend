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

  screen.getByText(/이것만 알면 말할 수 있다 문법!/);
  screen.getByText(/이태원에서 바로 먹히는 1분 완성 템플릿!/);
  screen.getByText(/문법 관리자페이지/);
  screen.getByText(/1분 완성 템플릿 관리자페이지/);
});
