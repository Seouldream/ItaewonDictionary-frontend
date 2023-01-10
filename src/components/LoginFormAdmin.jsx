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

export default function LoginFormAdmin({ location }) {
  const navigate = useNavigate();

  const userStore = useUserStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [, setAccessInfo] = useLocalStorage(
    'accessInformation',
    { accessToken: '', name: '', role: '' },
  );

  const onSubmit = async (data) => {
    const { username, password } = data;

    const { accessToken, name, role } = await userStore.login({ username, password });

    if (userStore.loginSuccessful) {
      setAccessInfo({ accessToken, name, role });

      if (location.state?.previousPage === 'productDetail') {
        navigate(-1);
      }

      navigate('/');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>ADMIN LOGIN</Title>
        <Inputs>
          <Input
            id="input-username"
            type="text"
            name="username"
            placeholder="아이디"
            error={(errors.username && errors.password)
              || errors.username || userStore.loginFailed}
            {...register('username', { required: true })}
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
        <Button
          type="submit"
          style={{
            background: '#00C641',
            color: 'white',
            margin: '1em 0 0 0',
          }}
        >
          로그인하기
        </Button>
        <Link to="/signup">회원가입</Link>
        <Error>
          {errors.username && errors.password && <p>아이디와 비밀번호를 입력해 주세요</p>}
          {errors.username && !errors.password && (<p>아이디를 입력해 주세요</p>)}
          {!errors.username && errors.password && (<p>비밀번호를 입력해 주세요</p>)}
          {userStore.loginFailed && (<p>아이디 혹은 비밀번호가 맞지 않습니다</p>)}
        </Error>
      </form>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
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
  border-bottom: 1px solid #00C641;
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
