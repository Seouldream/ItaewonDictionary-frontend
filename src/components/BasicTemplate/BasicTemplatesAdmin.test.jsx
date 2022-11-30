import { render, screen } from '@testing-library/react';
import BasicTemplatesAdmin from './BasicTemplatesAdmin';

describe('BasicTemplatesAdmin', () => {
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

  const isOpen = jest.fn();
  const basicTemplateForm = jest.fn();
  const handleChangeTitle = jest.fn();
  const handleChangeEnglishSentence = jest.fn();
  const handleChangeKoreanSentence = jest.fn();
  const handleChangeDescription = jest.fn();
  const handleChangeYoutubeUrl = jest.fn();
  const handleClickOpenBasicTemplateUpdateForm = jest.fn();
  const handleClickCancelUpdate = jest.fn();
  const handleClickConfirmUpdate = jest.fn();
  const handleClickDeleteBasicTemplate = jest.fn();

  it('shows basicTemplates\'s content', () => {
    render((
      <BasicTemplatesAdmin
        isOpen={isOpen}
        basicTemplates={basicTemplates}
        basicTemplateForm={basicTemplateForm}
        handleChangeTitle={handleChangeTitle}
        handleChangeEnglishSentence={handleChangeEnglishSentence}
        handleChangeKoreanSentence={handleChangeKoreanSentence}
        handleChangeDescription={handleChangeDescription}
        handleChangeYoutubeUrl={handleChangeYoutubeUrl}
        handleClickOpenBasicTemplateUpdateForm={handleClickOpenBasicTemplateUpdateForm}
        handleClickCancelUpdate={handleClickCancelUpdate}
        handleClickConfirmUpdate={handleClickConfirmUpdate}
        handleClickDeleteBasicTemplate={handleClickDeleteBasicTemplate}
      />
    ));

    screen.getByText(/인삿말 배우기/);
    screen.getByText('Hey -! How are you?');
    screen.getByText(/일상에서 자기 소개하는 법 배우기/);
    screen.getByText('지민같은 표현 등이 있다.');
  });
});
