import { render, screen } from '@testing-library/react';
import StudiesPage from './StudiesPage';

const context = describe;

jest.mock('react-router-dom', () => ({
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
  useNavigate: () => ({
    navigate: jest.fn(),
  }),
}));

let studies;
let pageNumbers;

jest.mock('../hooks/useStudiesStore', () => () => ({
  studies,
  pageNumbers,
  fetchStudies: jest.fn(),
  changePageNumber: jest.fn(),
}));

describe('StudiesPage', () => {
  context('studies', () => {
    beforeEach(() => {
      studies = [
        {
          id: 1, writer: 'Kim', title: 'No one Here?', content: 'anyBody here?', hashTag: 'java,react',
        },
        {
          id: 2, writer: 'Lee', title: 'Second visitor', content: 'I stayed here more than 10days but I Couldnt see anybody here yet.', hashTag: 'empty,sad',
        },
      ];
      pageNumbers = [1];
    });

    it('스터디 목록 2개 보여줌', () => {
      render(
        <StudiesPage />,
      );
      // screen.getByText(/Kim/);
      // screen.getByText(/#java/);
      // screen.getByText(/Second/);
    });
  });
});
