import { fireEvent, render, screen } from '@testing-library/react';
import BasicTemplateAdmin from './BasicTemplateAdmin';

describe('BasicTemplate', () => {
  const basicTemplate = {
    id: 1,
    title: '인삿말 배우기',
    englishSentence: 'Hey -! How are you?',
    koreanSentence: '안녕 무슨 일이야?',
    youtubeUrl: 'https://www.youtube.com/embed/L9Ijl9fDcZs',
    description: '가장 기초적인 인삿말이다. how are you가 조금 더 보편적으로 오랜 친구를 보거나 친구를 보고 인사할때 사용하기 좋다.what is up 은 무슨일이야? 라는 의미에 조금 더 가까우므로 친구들에게 뭐하냐는 의미의 연락을 취할때 사용하기 좋은 표현이다.그외로는 … … 같은 표현 등이 있다.',
  };

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
  const index = 0;

  it('renders study information', () => {
    render((
      <BasicTemplateAdmin
        key={basicTemplate.id}
        isOpen={isOpen}
        basicTemplateForm={basicTemplateForm}
        basicTemplate={basicTemplate}
        index={index}
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

    screen.getByText(/Hey -! How are you?/);
    screen.getByText(/안녕 무슨 일이야?/);
    screen.getByText(/해석 및 풀이 보기/);
    screen.getByText(/가장 기초적인 인삿말이다/);
    screen.getByText(/너무 쉽나요?/);
    screen.getByText(/수정하기/);

    fireEvent.click(screen.getByText(/수정하기/));
    expect(handleClickOpenBasicTemplateUpdateForm).toBeCalledWith(1, 0);
  });
});
