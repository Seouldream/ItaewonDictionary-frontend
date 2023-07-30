/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { useForm } from 'react-hook-form';
import useUserStore from '../hooks/useUserStore';
import Button from './common/Button';
import Input from './common/Input';
import KakaoLoginButton from './KakaoLogin';

export default function LoginForm({ location, handleClickKakaoLogin }) {
  const navigate = useNavigate();

  const userStore = useUserStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [, setAccessInfo] = useLocalStorage(
    'accessInformation',
    { accessToken: '', name: '', role: '' },
  );

  const onSubmit = async (data) => {
    const { userName, password } = data;

    const { accessToken, name, role } = await userStore.login({ userName, password });

    if (userStore.loginSuccessful) {
      setAccessInfo({ accessToken, name, role });

      if (location.state?.previousPage === '') {
        navigate(-1);
      }

      navigate('/');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>USER LOGIN</Title>
        <Inputs>
          <Input
            id="input-username"
            type="text"
            name="username"
            placeholder="아이디"
            error={(errors.username && errors.password)
              || errors.username || userStore.loginFailed}
            {...register('userName', { required: true })}
          />
          <Input
            id="input-password"
            type="password"
            name="password"
            placeholder="비밀번호"
            error={(errors.username && errors.password)
              || errors.password || userStore.loginFailed}
            {...register('password', { required: true })}
          />
        </Inputs>
        <Error>
          {errors.username && errors.password && <p>아이디와 비밀번호를 입력해 주세요</p>}
          {errors.username && !errors.password && (<p>아이디를 입력해 주세요</p>)}
          {!errors.username && errors.password && (<p>비밀번호를 입력해 주세요</p>)}
          {userStore.loginFailed && (<p>아이디 혹은 비밀번호가 맞지 않습니다</p>)}
        </Error>
        <Button type="submit">로그인하기</Button>
        <KakaoLoginButton
          handleClickKakaoLogin={handleClickKakaoLogin}
        />
      </form>
      <RegisterLink to="/signup">회원가입</RegisterLink>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  a {
    display: block;
    margin-top: 60px;
    text-align: center;
  }
`;

const Title = styled.h2`
  padding-block: 4px;
  border-bottom: 1px solid ${((props) => props.theme.colors.primary)};
  font-size: ${((props) => props.theme.size.h1)};
  font-weight: 700;
  text-align: center;
`;

const Inputs = styled.div`
  #input-username {
    margin-top: 60px;
  }
`;

const Error = styled.div`
  height: 60px;
  
  p {
    padding-top: 20px;
    
    font-size: 15px;
    color: ${((props) => props.theme.text.red)};
  }
`;

const RegisterLink = styled(Link)`
  margin-top: 2rem !important;
`;
