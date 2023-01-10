import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('App', () => {
  localStorage.setItem(
    'accessInformation',
    JSON.stringify({ accessToken: 'accessToken', name: 'tester1', role: 'user' }),
  );

  render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));
});
