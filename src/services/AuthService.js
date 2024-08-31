class AuthService {
  constructor(authStore) {
    this.authStore = authStore;
  }

  register(params) {
    // in real world scenario, send request to server for auth token
    this.authStore.setData({
      email_address: params.email_address
    });
  }

  login(params) {
    // in real world scenario, send request to server for auth token
    this.authStore.setData({
      email_address: params.email_address
    });
  }

  logout() {
    this.authStore.clearData();
  }

  isLoggedIn() {
    return this.authStore.hasData();
  }
}

export default AuthService;
