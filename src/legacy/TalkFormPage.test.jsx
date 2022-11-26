import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import server from '../util/testServer';

import TalkFormPage from './TalkFormPage';

jest.mock('@ckeditor/ckeditor5-react', () => ({
  CKEditor: jest.fn(),
}));
jest.mock('@ckeditor/ckeditor5-build-classic', () => '');

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

describe('TalkFormPage', () => {
  server.listen();

  it('renders TalkFormPage', async () => {
    render(<TalkFormPage />);

    screen.getByText('잡담소');
    screen.getByText(/제목/);

    fireEvent.change(screen.getByLabelText('제목'), {
      target: { value: 'test server' },
    });

    fireEvent.change(screen.getByLabelText('해쉬태그'), {
      target: { value: 'java,react' },
    });

    fireEvent.click(screen.getByRole('button', { name: '글 등록하기' }));

    await waitFor(() => {
      expect(navigate).toBeCalledWith('/talks');
    });
  });
});
