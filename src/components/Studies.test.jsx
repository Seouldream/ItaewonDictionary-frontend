import { render, screen } from '@testing-library/react';

import Studies from './Studies';

describe('Studies', () => {
  const studies = [
    {
      id: 1,
      title: '사이드 프로젝트하실 프론트 한 분 구합니다',
      writer: '로지',
      createdDate: '2022. 10, 30',
      hashTags: ['javascript', 'react'],
      viewsCount: 0,
      commentsCount: 0,
      likesCount: 0,
    },
    {
      id: 2,
      title: '코딩 스터디 구함',
      writer: '아샬',
      createdDate: '2022. 10, 30',
      hashTags: ['javascript', 'react'],
      viewsCount: 0,
      commentsCount: 0,
      likesCount: 0,
    },
  ];

  const pageNumbers = [
    1,
  ];

  const handleClickStudy = jest.fn();

  it('renders studies', () => {
    render((
      <Studies
        studies={studies}
        onClickStudy={handleClickStudy}
      />
    ));

    screen.getByText(/로지/);
    screen.getByText(/사이드 프로젝트하실 프론트 한 분 구합니다/);
    screen.getByText(/아샬/);
    screen.getByText(/코딩 스터디 구함/);
  });
});
