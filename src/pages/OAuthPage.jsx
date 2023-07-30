import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import useRequestAccessToken from '../hooks/useRequestAccessToken';

// import useRequestAccessToken from '../hooks/useRequestAccessToken';

const Container = styled.div`
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: fit-content;
    font-size: 2rem;
  }
`;

export default function OAuthPage() {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  const code = searchParams.get('code') || '';

  console.log('code', code);

  const state = JSON.parse(searchParams.get('state') || '{}');

  console.log('state', state);

  const redirect = state?.redirect || '/';

  console.log('redirect', redirect);

  useRequestAccessToken({ code, redirect });

  return (
    <Container>
      <div>
        Processing...
      </div>
    </Container>
  );
}
