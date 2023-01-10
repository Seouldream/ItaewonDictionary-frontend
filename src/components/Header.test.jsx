import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
}));

const context = describe;

describe('Header', () => {
  describe('logged in ', () => {
    beforeEach(() => {
      localStorage.setItem(
        'accessInformation',
        JSON.stringify({ accessToken: 'accessToken', name: 'tester1', role: 'user' }),
      );
    });
    context('logged in with user account', () => {
      it('renders user menu', () => {
        render(<Header />);

        screen.getByText(/문법/);
        screen.getByText(/1분템플릿/);
        screen.getByText(/실전템플릿/);
        screen.getByText(/말하고 첨삭받기/);
        screen.getByText(/커뮤니티/);

        screen.getByText(/tester1님 안녕하세요!/);
      });
    });

    context('logs out', () => {
      it('navigates to HomePage', () => {
        render(<Header />);

        fireEvent.click(screen.getByText(/로그아웃/));
        expect(navigate).toBeCalledWith('/');
      });
    });
  });
});
