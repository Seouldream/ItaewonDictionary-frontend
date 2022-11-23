import { render, screen } from '@testing-library/react';

import EventsPage from './EventsPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

const context = describe;

describe('EventsPage', () => {
  context('withoutPosts', () => {
    it('renders EventsPage', () => {
      render(<EventsPage />);
      screen.getByText(/코쉘린/);
      screen.getByText(/온라인 모임과/);
      screen.getByText(/커뮤니티를 만나세요/);
      screen.getByText(/웨비나,모임/);
    });
  });
});
