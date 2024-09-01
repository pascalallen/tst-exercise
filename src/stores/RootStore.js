import AuthStore from './AuthStore';
import UserStore from './UserStore';

class RootStore {
  constructor() {
    this.authStore = new AuthStore();
    this.userStore = new UserStore();
  }
}

export default RootStore;
