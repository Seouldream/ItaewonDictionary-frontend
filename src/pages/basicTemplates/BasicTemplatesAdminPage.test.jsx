import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import BasicTemplatesAdminPage from './BasicTemplatesAdminPage';

const context = describe;

let basicTemplates;

let basicTemplateForm;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

jest.mock('../../hooks/useBasicTemplatesStore', () => () => ({
  basicTemplates,
  fetchBasicTemplates: jest.fn(),
}));

jest.mock('../../hooks/useBasicTemplatesAdminFormStore', () => () => ({
  basicTemplates,
  basicTemplateForm,
  changeTitle: jest.fn(),
  ChangeEnglishSentence: jest.fn(),
  ChangeKoreanSentence: jest.fn(),
  ChangeDescription: jest.fn(),
  ChangeYoutubeUrl: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('BasicTemplateAdminPage', () => {
  const toggle = jest.fn();

  beforeEach(() => {
    basicTemplates = [
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
  });

  context('renders BasicTemplateAdminPage', () => {
    it('shows basicTemplateAdminpage texts', async () => {
      useState.mockImplementation((isOpen) => [isOpen, toggle]);

      render(<BasicTemplatesAdminPage />);

      screen.getByText(/인삿말 배우기/);
      screen.getByText(/두번째 스텝 이태원에서 바로 먹히는 1분 완성 템플릿/);
      screen.getByText(/Tip! 정말로 그 상황속에 처한 듯 연기를 하시면 실력이 확연히 늘어요!/);
      screen.getByText(/실전 템플릿으로 바로가기!/);
      screen.getByText(/템플릿 추가하기/);
    });
  });
});
