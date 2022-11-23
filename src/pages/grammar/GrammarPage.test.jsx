import {
  render, screen,
} from '@testing-library/react';

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
      introduction: '영어를 말하기 위해서 가장 기초적인 문법들만 모아놓았어요! 더 이상의 문법은 담지 않았어요. 나머지는 직접 쓰고 활용하면서 조금 더 익혀보도록 해요!',
      content: '1형식 주어 + 동사 하나의 주어와 목적어를 필요로하지 않는 동사가 합쳐져 ~ … **첫번째는 자동사와 타동사 그리고 완전과 불완전이라는 용어입니다.** - 목적어 **없으면** 자동사- 목적어 **있으면** 타동사 - 보어가 **필요 없으면** 완전',
    };
  });

  it('renders GrammarPage', async () => {
    render(<GrammarPage />);

    screen.getByText(/이태원에서 바로 먹히는 영어 회화 실전 문법!/);
    screen.getByText(/영어를 말하기 위한 가장 기초적인 문법들만 모아놓았어요!/);
    screen.getByText(/1형식/);
  });
});
