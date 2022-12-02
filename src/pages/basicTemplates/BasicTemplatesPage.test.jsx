import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import BasicTemplatesPage from './BasicTemplatesPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

const basicTemplates = [
  {
    id: 1,
    title: '인삿말 배우기',
    englishSentence: 'Hey -! How are you?',
    koreanSentence: '안녕 무슨 일이야?',
    youtubeUrl: 'https://www.youtube.com/embed/L9Ijl9fDcZs',
    description: '가장 기초적인 인삿말이다. how are you가 조금 더 보편적으로 오랜 친구를 보거나 친구를 보고 인사할때 사용하기 좋다.what is up 은 무슨일이야? 라는 의미에 조금 더 가까우므로 친구들에게 뭐하냐는 의미의 연락을 취할때 사용하기 좋은 표현이다.그외로는 … … 같은 표현 등이 있다.',
  },
  {
    id: 2,
    title: '일상에서 자기 소개하는 법 배우기',
    englishSentence: 'Hi -! My name is Jimin. It is good to see you!',
    koreanSentence: '안녕 나는 지민이라고 해! 널 만나게 되어서 반가워!',
    youtubeUrl: 'https://www.youtube.com/embed/L9Ijl9fDcZs',
    description: '지민같은 표현 등이 있다.',
  },
];

test('basicTemplate', () => {
  render(<BasicTemplatesPage
    basicTemplates={basicTemplates}
  />);

  screen.getByText('컨텐츠 준비중입니다. 잠시만 기다려주세요.');

  waitFor(() => {
    screen.getByText('두번째 스텝 이태원에서 바로 먹히는 1분 완성 템플릿');
    screen.getByText('일상 회화에서 자주 쓰는 표현들로만 모아보았어요!');
    screen.getByText('다음을 발음해보고 따라하면서 익혀보아요!');

    screen.getByText('실전 템플릿으로 바로가기!');

    fireEvent.click(screen.getByText('실전 템플릿으로 바로가기!'));

    expect(navigate).toBeCalledWith('/practicalTemplates');
  });
});
