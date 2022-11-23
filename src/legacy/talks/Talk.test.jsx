import { render, screen } from '@testing-library/react';
import Talk from './Talk';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

describe('Talk', () => {
  const freeTalk = {
    id: 1,
    title: '취업 고민이 생겼어요.',
    writer: '메가테라 4기',
    registrationDate: '2022. 11, 11',
    hashTags: ['취업', '신입개발자'],
    views: 0,
    comments: 0,
    likes: 0,
  };

  const onClickFreeTalk = jest.fn();

  it('renders Talk Component', () => {
    render(<Talk
      freeTalk={freeTalk}
      onClickFreeTalk={onClickFreeTalk}
    />);

    screen.getByText(/취업 고민이 생겼어요/);
    screen.getByText(/신입개발자/);
    screen.getByText(/2022. 11, 11/);
  });
});
