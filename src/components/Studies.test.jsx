import { render, screen } from '@testing-library/react';
import Studies from './Studies';

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

describe('Studies', () => {
  const handleClick = jest.fn();

  function renderStudies(studies, pageNumbers) {
    render((
      <Studies
        studies={studies}
        pageNumbers={pageNumbers}
        onClick={handleClick}
      />
    ));
  }

  context('with studies', () => {
    const studies = [
      {
        id: 1, writer: 'Kim', title: 'No one Here?', content: 'anyBody here?', hashTag: 'java,react',
      },
      {
        id: 2, writer: 'Lee', title: 'Second visitor', content: 'I stayed here more than 10days but I Couldnt see anybody here yet.', hashTag: 'empty,sad',
      },
    ];
    const pageNumbers = [];

    it('스터디 모집 게시물들을 보여준다.', () => {
      renderStudies(studies, pageNumbers);
      screen.getByText(/Kim/);
    });
  });
});
