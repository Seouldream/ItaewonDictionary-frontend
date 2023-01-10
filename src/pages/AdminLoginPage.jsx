import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoginFormAdmin from '../components/LoginFormAdmin';
import useUserStore from '../hooks/useUserStore';

export default function AdminLoginPage() {
  const location = useLocation();
  const userStore = useUserStore();

  useEffect(() => () => {
    userStore.resetLoginStatus();
  }, []);

  return (
    <LoginFormAdmin location={location} />
  );
}
