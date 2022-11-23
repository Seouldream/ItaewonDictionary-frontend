import { render, screen } from '@testing-library/react';
import TalkDetail from './TalkDetail';

const location = { state: { id: 1 } };

jest.mock('react-router-dom', () => ({
  useLocation() {
    return location;
  },
}));

let freeTalk;

jest.mock('../../hooks/useTalksStore', () => () => ({
  freeTalk,
  fetchFreeTalk: jest.fn(),
}));

const convertToHtml = jest.fn();

describe('TalkDetail', () => {
  freeTalk = {
    id: 1,
    title: '개발자 취업 어떻게 해요?',
    writer: '취준생23쨜 로지',
    registrationDate: '2022. 11, 11',
    hashTags: ['빼빼로데이', '11월11일'],
    content: '<h1>안녕하세요 첫 글입니다.</h1>',
    views: 0,
    comments: 0,
    likes: 0,
  };

  const hashTags = ['빼빼로데이', '11월11일'];

  it('renders details of Talk', () => {
    render(<TalkDetail />);

    screen.getByText(/개발자 취업 어떻게 해요?/);
    screen.getByText(/안녕하세요 첫 글입니다./);
    screen.getByText(/빼빼로데이/);
  });
});
