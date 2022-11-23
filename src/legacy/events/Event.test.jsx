import { render, screen } from '@testing-library/react';
import Event from './Event';

describe('Event', () => {
  const event = {
    id: 1,
    title: '2022 서울기록페어',
    date: '11월 10일(목)오프라인',
    imgUrl: 'https://cdn.pixabay.com/photo/2022/10/20/12/36/germany-7534750__480.jpg',
    hashTags: ['메가테라 4기', '시드웨일'],
  };

  const onClickEvent = jest.fn();

  it('renders Event', () => {
    render(<Event
      key={event.id}
      event={event}
      onClickEvent={onClickEvent}
    />);

    screen.getByText(/2022 서울기록페어/);
    screen.getByText(/#메가테라 4기/);
  });
});
