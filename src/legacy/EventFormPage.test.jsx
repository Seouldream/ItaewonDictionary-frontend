import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import server from '../util/testServer';
import EventFormPage from './EventFormPage';

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

describe('EventFormPage', () => {
  server.listen();

  it('renders EventFormPage', async () => {
    render(<EventFormPage />);
  });
});
