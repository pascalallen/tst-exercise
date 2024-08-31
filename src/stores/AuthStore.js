class AuthStore {
  constructor() {
    const serializedData = localStorage.getItem('auth_data');
    if (serializedData !== null) {
      this.data = { ...JSON.parse(serializedData) };
    }
  }

  setData(data) {
    this.data = Object.freeze(data);
    localStorage.setItem('auth_data', JSON.stringify(this.data));
  }

  clearData() {
    this.data = undefined;
    localStorage.removeItem('auth_data');
  }

  hasData() {
    return this.data !== undefined;
  }

  getData() {
    return this.data;
  }
}

export default AuthStore;
