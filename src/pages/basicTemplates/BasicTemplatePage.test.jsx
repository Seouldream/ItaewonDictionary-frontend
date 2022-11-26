import BasicTemplatePage from './BasicTemplatePage';

const { render, screen } = require('@testing-library/react');

test('basicTemplate', () => {
  render(<BasicTemplatePage />);

  screen.getByText('기초 템플릿 페이지 입니다.');
});
