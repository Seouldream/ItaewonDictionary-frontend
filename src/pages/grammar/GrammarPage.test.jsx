import {
  render, screen,
} from '@testing-library/react';

import server from '../../util/testServer';
import GrammarPage from './GrammarPage';

// jest.mock('@ckeditor/ckeditor5-react', () => ({
//   CKEditor: jest.fn(),
// }));
// jest.mock('@ckeditor/ckeditor5-build-classic', () => '');
let grammar;

jest.mock('../hooks/useGrammarStore', () => () => ({
  grammar,
  fetchGrammar: jest.fn(),
}));

describe('GrammarPage', () => {
  beforeEach(() => {
    grammar = {
      id: 1,
      introduction: '영어를 말하기 위한 가장 기초적인 문법들만 모아놓았어요!',
      content: '1형식',
    };
  });

  it('renders GrammarPage', async () => {
    render(<GrammarPage />);

    screen.getByText(/이태원에서 바로 먹히는 영어 회화 실전 문법!/);
    screen.getByText(/영어를 말하기 위한 가장 기초적인 문법들만 모아놓았어요!/);
    screen.getByText(/1형식/);

    // fireEvent.change(screen.getByLabelText('제목'), {
    //   target: { value: 'test server' },
    // });

    // fireEvent.change(screen.getByLabelText('해쉬태그'), {
    //   target: { value: 'java,react' },
    // });

    // fireEvent.click(screen.getByRole('button', { name: '글 등록하기' }));

    // await waitFor(() => {
    //   expect(navigate).toBeCalledWith('/talks');
    // });
  });
});
