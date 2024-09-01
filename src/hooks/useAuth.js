import useStore from './useStore';
import AuthService from '../services/AuthService';

const useAuth = () => {
  const authStore = useStore('authStore');
  const userStore = useStore('userStore');

  return new AuthService(authStore, userStore);
};

export default useAuth;
