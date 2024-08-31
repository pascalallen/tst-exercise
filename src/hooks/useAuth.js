import useStore from './useStore';
import AuthService from '../services/AuthService';

const useAuth = () => {
  const authStore = useStore('authStore');

  return new AuthService(authStore);
};

export default useAuth;
