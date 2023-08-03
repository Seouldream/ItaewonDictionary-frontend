import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from '../../styles/DefaultTheme';

import BasicTemplateEditForm from './BasicTemplateEditForm';

const context = describe;

const index = 0;

const isOpen = [true, false];

const basicTemplateForm = {
  id: 1,
  title: '인삿말 배우기',
  englishSentence: 'Hey -! How are you?',
  koreanSentence: '안녕 무슨 일이야?',
  youtubeUrl: 'https://www.youtube.com/embed/L9Ijl9fDcZs',
  description: '가장 기초적인 인삿말이다. how are you가 조금 더 보편적으로 오랜 친구를 보거나 친구를 보고 인사할때 사용하기 좋다.what is up 은 무슨일이야? 라는 의미에 조금 더 가까우므로 친구들에게 뭐하냐는 의미의 연락을 취할때 사용하기 좋은 표현이다.그외로는 … … 같은 표현 등이 있다.',
};

const handleChangeTitle = jest.fn();
const handleChangeEnglishSentence = jest.fn();
const handleChangeKoreanSentence = jest.fn();
const handleChangeDescription = jest.fn();
const handleChangeYoutubeUrl = jest.fn();
const handleClickCancelUpdate = jest.fn();
const handleClickConfirmUpdate = jest.fn();

function renderBasicTemplateEditForm() {
  render(
    <ThemeProvider theme={DefaultTheme}>
      <BasicTemplateEditForm
        isOpen={isOpen[index]}
        basicTemplateForm={basicTemplateForm}
        handleChangeTitle={handleChangeTitle}
        handleChangeEnglishSentence={handleChangeEnglishSentence}
        handleChangeKoreanSentence={handleChangeKoreanSentence}
        handleChangeDescription={handleChangeDescription}
        handleChangeYoutubeUrl={handleChangeYoutubeUrl}
        handleClickConfirmUpdate={handleClickConfirmUpdate}
        handleClickCancelUpdate={handleClickCancelUpdate}
      />
    </ThemeProvider>,
  );
}

describe('BasicTemplateEditForm', () => {
  context('renders BasicTemplateEditForm', () => {
    it('shows basicTemplateEditForm ', () => {
      renderBasicTemplateEditForm();

      screen.getByText('제목');

      screen.getByDisplayValue('인삿말 배우기');
    });

    it('changes input text.', () => {
      renderBasicTemplateEditForm();

      screen.getByText('제목');

      fireEvent.change(screen.getByLabelText('제목'), { target: { value: '수정된 제목입니다.' } });

      expect(handleChangeTitle).toBeCalled();
    });
  });
});
