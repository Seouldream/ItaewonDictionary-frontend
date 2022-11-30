import BasicTemplatePage from './BasicTemplatesPage';

const { render, screen, fireEvent } = require('@testing-library/react');

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('basicTemplate', () => {
  render(<BasicTemplatePage />);

  screen.getByText('두번째 스텝 이태원에서 바로 먹히는 1분 완성 템플릿');
  screen.getByText('일상 회화에서 자주 쓰는 표현들로만 모아보았어요!');
  screen.getByText('다음을 발음해보고 따라하면서 익혀보아요!');

  screen.getByText('실전 템플릿으로 바로가기!');

  fireEvent.click(screen.getByText('실전 템플릿으로 바로가기!'));

  expect(navigate).toBeCalledWith('/practicalTemplates');
});
