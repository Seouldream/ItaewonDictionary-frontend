import { RiKakaoTalkFill } from 'react-icons/ri';

import styled from 'styled-components';

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  border: 1px solid #000000;
  border-radius: .8rem;
  background: #FEE500;
  color: #000;
  margin-top: 1rem;
  width: 100%;
  height: 4rem;
  font-size: 1.6rem;
  font-weight: bold;

  svg {
    width: 3rem;
    height: 3rem;
    margin-right: .8rem;
  }
`;

export default function KakaoLoginButton({ handleClickKakaoLogin }) {
  const handleClick = () => {
    handleClickKakaoLogin();
  };

  return (
    <LoginButton onClick={handleClick}>
      <RiKakaoTalkFill />
      카카오 로그인
    </LoginButton>
  );
}
