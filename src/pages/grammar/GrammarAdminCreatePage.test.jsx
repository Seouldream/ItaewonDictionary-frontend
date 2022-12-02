import { fireEvent, render, screen } from '@testing-library/react';
import { useState as useStateMock } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import GrammarAdminCreatePage from './GrammarAdminCreatePage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('@ckeditor/ckeditor5-react', () => ({
  CKEditor: jest.fn(),
}));

jest.mock('@ckeditor/ckeditor5-build-classic', () => {});

const context = describe;

describe('GrammarAdminCreatePage', () => {
  const setIsOpen = jest.fn();

  const toggleModal = setIsOpen;

  context('renders GrammarAdminCreatePage', () => {
    useStateMock.mockImplementation((isOpen) => [isOpen, setIsOpen]);

    it('shows label texts', () => {
      render(<GrammarAdminCreatePage />);

      screen.getByLabelText('문법 페이지 안내글');

      screen.getByText('문법 컨텐츠');
    });
  });

  it('works grammarCreateButton', () => {
    render(<GrammarAdminCreatePage />);

    fireEvent.change(screen.getByLabelText('문법 페이지 안내글'), {
      target: { value: '이태원에서 바로 쓸 수 있는 문법!' },
    });

    fireEvent.click(screen.getByText('작성 완료'));

    expect(toggleModal).toBeCalled();
  });
});
