import { fireEvent, render, screen } from '@testing-library/react';

import Study from './Study';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

describe('Study', () => {
  const study = {
    id: 1,
    title: '사이드 프로젝트하실 프론트 한 분 구합니다',
    writer: '로지',
    createdDate: '2022. 10, 30',
    hashTags: ['tag', 'java'],
    viewsCount: 1,
    commentsCount: 2,
    likesCount: 3,
  };

  const handleClickStudy = jest.fn();

  it('renders study information', () => {
    render((
      <Study
        study={study}
        onClickStudy={handleClickStudy}
      />
    ));

    screen.getByText(/로지/);
    screen.getByText(/사이드 프로젝트하실 프론트 한 분 구합니다/);
    screen.getByText(/java/);
  });

  it('listens for study click event', () => {
    render((
      <Study
        study={study}
        onClickStudy={handleClickStudy}
      />
    ));

    fireEvent.click(screen.getByText(/로지/));

    expect(handleClickStudy).toBeCalledWith({ id: 1 });
  });
});
