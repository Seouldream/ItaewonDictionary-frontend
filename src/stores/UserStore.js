import { loginApiService } from '../services/LoginApiService';
import Store from './Store';

export default class UserStore extends Store {
  constructor() {
    super();

    this.name = '';

    this.loginStatus = '';
    this.signupStatus = '';
  }

  async signup({
    name, userName, password, confirmPassword,
  }) {
    this.changeSignupStatus('processing');
    this.publish();

    try {
      const { id } = await loginApiService.createUser({
        name, userName, password, confirmPassword,
      });

      this.changeSignupStatus('successful');
      this.publish();

      return id;
    } catch (e) {
      this.changeSignupStatus('failed');
      this.publish();

      return '';
    }
  }

  async login({ userName, password }) {
    this.changeLoginStatus('processing');
    this.publish();

    try {
      const { accessToken, name, role } = await loginApiService.postSession({ userName, password });

      this.name = name;

      this.changeLoginStatus('successful');
      this.publish();

      return { accessToken, name, role };
    } catch (e) {
      this.changeLoginStatus('failed');
      this.publish();

      return '';
    }
  }

  async fetchUser() {
    const { name } = await loginApiService.fetchUser();

    this.user.name = name;

    this.publish();
  }

  resetLoginStatus() {
    this.loginStatus = '';

    this.publish();
  }

  changeLoginStatus(status) {
    this.loginStatus = status;

    this.publish();
  }

  resetSignupStatus() {
    this.signupStatus = '';

    this.publish();
  }

  changeSignupStatus(status) {
    this.signupStatus = status;

    this.publish();
  }

  get signupSuccessful() {
    return this.signupStatus === 'successful';
  }

  get signupFailed() {
    return this.signupStatus === 'failed';
  }

  get loginSuccessful() {
    return this.loginStatus === 'successful';
  }

  get loginFailed() {
    return this.loginStatus === 'failed';
  }
}

export const userStore = new UserStore();
