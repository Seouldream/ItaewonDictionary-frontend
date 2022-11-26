import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('HomePage', () => {
  render(<HomePage />);

  screen.getByText(/이태원에서 먹히는 완벽 실전 영허 회화!/);
  screen.getByText(/이태원 뿐만 아니라 어디에서든 먹히는 제대로 된 영어를 무료로! 가르쳐드립니다./);
});
