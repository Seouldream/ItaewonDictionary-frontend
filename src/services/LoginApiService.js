/* eslint-disable class-methods-use-this */

import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class LoginApiService {
  constructor() {
    this.accessToken = '';

    this.instance = axios.create({
      baseURL: baseUrl,
    });
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;

    if (accessToken) {
      this.instance = axios.create({
        baseURL: baseUrl,
        headers: { Authorization: `Bearer ${this.accessToken}` },
      });
    }
  }

  async createUser({
    name, userName, password, confirmPassword,
  }) {
    const { data } = await this.instance.post('/register', {
      name, userName, password, confirmPassword,
    });

    return {
      id: data.id,
    };
  }

  async postSession({ userName, password }) {
    const { data } = await this.instance.post('/session', { userName, password });

    return {
      accessToken: data.accessToken,
      name: data.name,
      role: data.role,
    };
  }
}

export const loginApiService = new LoginApiService();
