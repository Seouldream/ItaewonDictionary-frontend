/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class SpeakPracticesAdminApiService {
  async deletePractice(id) {
    const url = `${baseUrl}/admin/practice/${id}`;

    await axios.delete(url);
  }
}

export const speakPracticesAdminApiService = new SpeakPracticesAdminApiService();
