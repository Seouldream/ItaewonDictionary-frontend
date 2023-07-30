import { useEffect } from 'react';
import KakaoLogin from 'react-kakao-login';
import { useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import useUserStore from '../hooks/useUserStore';

export default function LoginPage() {
  const location = useLocation();

  const restApiKey = process.env.REST_API_KEY;
  const redirectUrl = process.env.REDIRECT_URL;

  // console.log(restApiKey);
  const kakaoRedirectUrl = `kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUrl}&response_type=code`;

  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  // const redirect = searchParams.get('redirect') || '/profile';

  // console.log('Redirect:', redirect);

  const handleClickKakaoLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:8080/oauth',
      // state: JSON.stringify({ redirect }),
    });
  };

  const userStore = useUserStore();

  useEffect(() => () => {
    userStore.resetLoginStatus();
  }, []);

  return (
    <LoginForm
      location={location}
      redirect={kakaoRedirectUrl}
      handleClickKakaoLogin={handleClickKakaoLogin}
    />
  );
}
