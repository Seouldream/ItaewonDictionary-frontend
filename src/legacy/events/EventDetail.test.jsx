import {
  render, screen, waitFor,
} from '@testing-library/react';
import EventDetail from './EventDetail';

const location = { state: { id: 1 } };

jest.mock('react-router-dom', () => ({
  useLocation() {
    return location;
  },
}));

let event;

jest.mock('../../hooks/useEventsStore', () => () => ({
  event,
  fetchEvent: jest.fn(),
}));

describe('EventDetail', () => {
  const { id } = location.state;

  event = {
    id: 1,
    title: '2022 빼빼로 이벤트 기념',
    date: '11월 11일(금)오프라인',
    host: '롯데제과',
    price: '무료',
    hostEmail: 'Lotte2021@google.com',
    hostContact: '010-1123-3534',
    onOrOffline: '온라인',
    eventType: '광고',
    category: '프로그래밍',
    homepageAddress: 'https://megaptera.kr/',
    imgUrl: 'https://cdn.pixabay.com/photo/2022/10/20/12/36/germany-7534750__480.jpg',
    hashTags: ['솔로', '커플지옥'],
    content: '기존 솔로들에게 어마어마한 압도적 혜택이 있습니다.',
  };

  it('renders studyDetails', async () => {
    render((
      <EventDetail />
    ));

    await waitFor(() => {
      screen.getByText('기존 솔로들에게 어마어마한 압도적 혜택이 있습니다.');
      screen.getAllByText(/솔로/);
      screen.getByText(/커플지옥/);
    });
  });
});
