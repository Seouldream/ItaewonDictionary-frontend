import {
  render, screen, waitFor,
} from '@testing-library/react';

import StudyDetail from './StudyDetail';

const location = { state: { id: 1 } };

jest.mock('react-router-dom', () => ({
  useLocation() {
    return location;
  },
}));

let event;

// jest.mock('../hooks/useStudiesStore', () => () => ({
//   study,
//   fetchStudy: jest.fn(),
// }));

describe('EventDetail', () => {
  const { id } = location.state;
  event = {
    id: 1,
    title: '사이드 프로젝트하실 프론트 한 분 구합니다',
    writer: '로지',
    topic: '너희액트',
    place: '성수역 3번 출구',
    registrationDate: '2022. 10, 30',
    time: '매주 월 아침 9시',
    hashTags: [{ id: 1, tag: 'tag' }, { id: 2, tag: 'java' }],
    content: '보이나?!',
    views: 1,
    likes: 3,
  };

  it('renders studyDetails', async () => {
    render((
      <StudyDetail />
    ));

    await waitFor(() => {
      screen.getByText('보이나?!');
    });
  });
});
