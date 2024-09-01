/**
 * Class UserStore
 */
class UserStore {
  /** @type {Array} The users */
  users = [];

  /**
   * Constructs UserStore
   */
  constructor() {
    const users = localStorage.getItem('users');
    if (users !== null) {
      this.users = JSON.parse(users);
    }
  }

  /**
   * Retrieves a user by email address
   *
   * @param {string} emailAddress The user's email address
   *
   * @return {Promise<Object | null>} The user, or null if not found
   */
  async getByEmailAddress(emailAddress) {
    const user = this.users.find(user => user.email_address === emailAddress);
    return user || null;
  }

  /**
   * Adds user
   *
   * @param {Object} user The user
   *
   * @return {Promise<void>}
   */
  async add(user) {
    this.users.push({ email_address: user.email_address, password: user.password });
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  /**
   * Clears user store
   *
   * @return {void}
   */
  clear() {
    this.users = [];
    localStorage.removeItem('users');
  }
}

export default UserStore;