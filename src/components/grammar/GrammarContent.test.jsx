import { fireEvent, render, screen } from '@testing-library/react';
import { useState as useStateMock } from 'react';
import GrammarContent from './GrammarContent';

const context = describe;

const content = '문장의 형식이란';
const handleChangeContent = jest.fn();
const handleClickEditContent = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('@ckeditor/ckeditor5-react', () => ({
  CKEditor: jest.fn(),
}));

jest.mock('@ckeditor/ckeditor5-build-classic', () => '');

describe('GrammarContent', () => {
  const setIsOpen = jest.fn();

  const toggleModal = setIsOpen;

  function renderComponent() {
    render(<GrammarContent
      content={content}
      onChangeContent={handleChangeContent}
      onClickEditContent={handleClickEditContent}
    />);
  }

  context('renders GrammarContent', () => {
    useStateMock.mockImplementation((isOpen) => [isOpen, setIsOpen]);

    it('proves edit button working', () => {
      renderComponent();

      screen.getByText('수정 완료');

      fireEvent.click(screen.getByText('수정 완료'));

      expect(toggleModal).toBeCalled();
    });
  });
});
