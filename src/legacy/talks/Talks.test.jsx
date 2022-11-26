import { render, screen } from '@testing-library/react';
import Talks from './Talks';

describe('Talks', () => {
  const freeTalks = [
    {
      id: 1,
      title: '취업고민나눠요',
      writer: '로지',
      createdDate: '2022. 10, 30',
      hashTags: ['취업', '신입개발자'],
      views: 0,
      likes: 0,
      content: '<p>24살 취준생입니다.</p>',
    },
  ];

  const pageNumbers = [
    1,
  ];

  const onClickFreeTalk = jest.fn();

  it('renders FreeTalks', () => {
    render((
      <Talks
        freeTalks={freeTalks}
        onClickFreeTalk={onClickFreeTalk}
      />
    ));

    screen.getByText(/취업고민나눠요/);
    screen.getByText(/로지/);
    screen.getByText(/신입개발자/);
  });
});
