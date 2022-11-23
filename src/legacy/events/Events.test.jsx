import { render, screen } from '@testing-library/react';
import Events from './Events';

describe('events', () => {
  const events = [
    {
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
    },
    {
      id: 2,
      title: '개발자라면 봐야할 필수 웨비나',
      date: '11월 13일(일) 온라인',
      host: '시드웨일',
      price: '무료',
      hostEmail: 'seedWhale@google.com',
      hostContact: '010-5555-3534',
      onOrOffline: '온라인 젭',
      eventType: '광고',
      category: '프로그래밍',
      homepageAddress: 'https://megaptera.kr/',
      imgUrl: 'https://cdn.pixabay.com/photo/2022/10/20/12/36/germany-7534750__480.jpg',
      hashTags: ['개발자', '취업진로'],
      content: '이것을 보시는 분에게는 압도적 혜택이 있습니다.',
    },
  ];

  const handleClickEvent = jest.fn();

  it('renders events components', () => {
    render(<Events
      events={events}
      onClickEvent={handleClickEvent}
    />);

    screen.getByText(/2022 빼빼로 이벤트 기념/);
    screen.getByText(/개발자라면 봐야할 필수 웨비나/);
    screen.getAllByText(/개발자/);
    screen.getByText(/취업진로/);
  });
});
