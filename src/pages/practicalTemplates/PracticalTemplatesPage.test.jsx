import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PracticalTemplatesPage from './PracticalTemplatesPage';

const context = describe;

const navigate = jest.fn();

const location = '';

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
  useSearchParams() {
    return [new URLSearchParams({ page: 1 })];
  },

  useLocation: () => location,

  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
}));

describe(('practicalTemplatesPage'), () => {
  context(('renders practicalTemplatesPage'), () => {
    it('shows practicalTemplates texts', () => {
      render(
        <PracticalTemplatesPage />,
      );

      screen.getByText(/인생은 실전이야 귀염둥이야/);
      screen.getByText('자 벌써 실전이에요!');
      screen.getByText('언어는 최대한 쉽고 간단하게 배워서 바로바로 써먹을때 실력이 가장 수직 상승한답니다.');
      screen.getByText(/아래 카테고리에서 상황별 영작을 해보고 영어로 말해보아요!/);
    });
  });
});
