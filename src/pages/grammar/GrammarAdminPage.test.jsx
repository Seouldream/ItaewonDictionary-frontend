import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import GrammarAdminPage from './GrammarAdminPage';

const context = describe;

let grammar;

let introduction;

let content;

jest.mock('../../hooks/useGrammarStore', () => () => ({
  grammar,
  fetchGrammar: jest.fn(),
}));

jest.mock('../../hooks/useGrammarAdminFormStore', () => () => ({
  introduction,
  content,
  changeIntroduction: jest.fn(),
  changeContent: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('GrammarAdminPage', () => {
  const introToggle = jest.fn();
  const contentToggle = jest.fn();
  beforeEach(() => {
    grammar = {
      id: 1,
      introduction: '영어를 말하기 위한 가장 기초적인 문법들만 모아놓았어요! 더 이상의 문법은 담지 않았어요. 나머지는 직접 쓰고 활용하면서 조금 더 익혀보도록 해요!',
      content: '1형식 주어 + 동사 하나의 주어와 목적어를 필요로하지 않는 동사가 합쳐져 ~ … **첫번째는 자동사와 타동사 그리고 완전과 불완전이라는 용어입니다.** - 목적어 **없으면** 자동사- 목적어 **있으면** 타동사 - 보어가 **필요 없으면** 완전',
    };
  });

  context('renders GrammarAdminPage', () => {
    it('shows grammar introduction and content', async () => {
      useState.mockImplementation(() => []);

      render(<GrammarAdminPage />);

      screen.getByText(/이태원에서 바로 먹히는 영어 회화 실전 문법!/);
      screen.getByText(/영어를 말하기 위한 가장 기초적인 문법들만 모아놓았어요!/);
      screen.getByText(/1형식/);
      screen.getByText(/안내 문구 수정하기/);
    });
  });

  context('renders "안내 문구 수정하기 button', () => {
    it('shows 안내 문구 button', async () => {
      useState.mockImplementation((introductionIsOpen) => [introductionIsOpen, introToggle]);

      render(<GrammarAdminPage />);

      screen.getByText(/안내 문구 수정하기/);

      fireEvent.click(screen.getByText(/안내 문구 수정하기/));

      expect(introToggle).toBeCalled();
    });
  });

  context('renders "내용 수정하기 button', () => {
    it('shows 내용 button', async () => {
      useState.mockImplementation((contentIsOpen) => [contentIsOpen, contentToggle]);

      render(<GrammarAdminPage />);

      screen.getByText(/그래마 컨텐츠 수정하기/);

      fireEvent.click(screen.getByText(/그래마 컨텐츠 수정하기/));

      expect(contentToggle).toBeCalled();
    });
  });
});
