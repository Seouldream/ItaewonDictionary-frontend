import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import BasicTemplateFormPage from './BasicTemplateFormPage';
import DefaultTheme from '../../styles/DefaultTheme';

const navigate = jest.fn();

const mockCreate = jest.fn();

const basicTemplateForm = {
  title: '',
  koreanSentence: '',
  englishSentence: '',
  description: '',
  youtubeUrl: '',
};

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

jest.mock('../../hooks/useBasicTemplatesAdminFormStore', () => () => ({
  createBasicTemplate: mockCreate,
  basicTemplateForm,
  changeTitle: (title) => {
    basicTemplateForm.title = title;
  },
  changeEnglishSentence: (englishSentence) => {
    basicTemplateForm.englishSentence = englishSentence;
  },
  changeKoreanSentence: (koreanSentence) => {
    basicTemplateForm.koreanSentence = koreanSentence;
  },
  changeDescription: (description) => {
    basicTemplateForm.description = description;
  },
}));

const context = describe;

describe('BasicTemplateFormPage', () => {
  context('renders BasicTemplateFormPage', () => {
    it('shows label texts', () => {
      render(
        <ThemeProvider theme={DefaultTheme}>
          <BasicTemplateFormPage />
        </ThemeProvider>,
      );

      screen.getByText('1분 완성 템플릿 작성하기');

      screen.getByLabelText('제목');

      screen.getByLabelText('영어문장');

      screen.getByLabelText('한글문장');

      screen.getByLabelText('상황설명');

      fireEvent.change(screen.getByLabelText('제목'), { target: { value: '인사하기' } });
      fireEvent.change(screen.getByLabelText('영어문장'), { target: { value: 'Hi!' } });
      fireEvent.change(screen.getByLabelText('한글문장'), { target: { value: '안녕!' } });
      fireEvent.change(screen.getByLabelText('상황설명'), { target: { value: '간단한 인사' } });

      fireEvent.click(screen.getByText('등록'));

      expect(mockCreate).toBeCalledWith({
        title: '인사하기',
        koreanSentence: '안녕!',
        englishSentence: 'Hi!',
        description: '간단한 인사',
        youtubeUrl: '',
      });
    });
  });
});
