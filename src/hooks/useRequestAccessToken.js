/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { loginApiService } from '../services/LoginApiService';

export default function useRequestAccessToken({ code, redirect }) {
  const [accessInfo, setAccessInfo] = useLocalStorage('accessInformation', { accessToken: '', name: '', role: '' });

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { accessToken, name, role } = await loginApiService.requestKakaoAccessToken({ code });

      if (!name) {
        navigate('/signup', {
          replace: true,
          state: { accessInfo },
        });

        return;
      }

      setAccessInfo({ accessToken, name, role });
      navigate(redirect);
    })();
  }, [code, navigate]);
}
