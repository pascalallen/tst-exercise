/**
 * Class AuthService
 */
class AuthService {
  /**
   * Constructs AuthService
   *
   * @param {Object} authStore The auth store
   * @param {Object} userStore The user store
   */
  constructor(authStore, userStore) {
    this.authStore = authStore;
    this.userStore = userStore;
  }

  /**
   * Registers a user
   *
   * @param {Object} params User registration properties
   *
   * @throws {Error} Throws error when user already exists
   *
   * @return {Promise<void>}
   */
  async register(params) {
    const user = await this.userStore.getByEmailAddress(params.email_address);
    if (user !== null) {
      throw new Error('User already exists');
    }

    // In real-world scenario, send request to server for auth token
    await this.userStore.add(params);
    this.authStore.setData({
      email_address: params.email_address
    });
  }

  /**
   * Authenticates a user
   *
   * @param {Object} params User authentication properties
   *
   * @throws {Error} Throws error when an error occurs
   *
   * @return {Promise<void>}
   */
  async login(params) {
    const user = await this.userStore.getByEmailAddress(params.email_address);
    if (user === null) {
      throw new Error('User not found');
    }

    if (user.password !== params.password) {
      throw new Error('Invalid password');
    }

    // In real-world scenario, send request to server for auth token
    this.authStore.setData({
      email_address: params.email_address
    });
  }

  /**
   * Clears a user's session
   *
   * @return {void}
   */
  logout() {
    this.authStore.clearData();
  }

  /**
   * Checks whether the user is authenticated
   *
   * @returns {boolean} Whether the user is logged in
   */
  isLoggedIn() {
    return this.authStore.hasData();
  }
}

export default AuthService;