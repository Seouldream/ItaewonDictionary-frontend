/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class BasicTemplatesApiService {
  async fetchBasicTemplates() {
    const url = `${baseUrl}/basicTemplates`;

    const { data } = await axios.get(url);

    const { basicTemplates } = data;

    return basicTemplates;
  }
}

export const basicTemplatesApiService = new BasicTemplatesApiService();
