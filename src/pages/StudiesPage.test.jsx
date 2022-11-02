import { render, screen } from '@testing-library/react';

import StudiesPage from './StudiesPage';

const navigate = jest.fn();

const context = describe;

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

let studies;

jest.mock('../hooks/useStudiesStore', () => () => ({
  studies,
  fetchStudies: jest.fn(),
}));

describe('StudiesPage', () => {
  context('when studies posted', () => {
    beforeEach(() => {
      studies = [
        {
          id: 1,
          writer: '로지',
          title: '첫 커뮤니티 글!',
          content: '자바하실 분',
          likes: 12,
          registrationDate: '2022-10-06',
          views: 10,
          hashTags: [{ id: 1, tag: 'tag' }, { id: 2, tag: 'java' }],
        },
      ];
    });

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
      screen.getByText(/첫 커뮤니티 글!/);
    });
  });
});
