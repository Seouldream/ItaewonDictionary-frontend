import { render, screen } from '@testing-library/react';

import StudiesPage from './StudiesPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

describe('StudiesPage', () => {
  it('redners title', () => {
    render(<StudiesPage />);

    screen.getByText(/스터디 게시판/);
  });

  it('renders write button', () => {
    render(<StudiesPage />);

    screen.getByText(/작성하기/);
  });

  it('renders study list', () => {
    render(<StudiesPage />);

    screen.getByText(/로지/);
    screen.getByText(/사이드 프로젝트하실 프론트 한 분 구합니다/);
  });
});
