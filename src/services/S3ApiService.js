/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class S3ApiService {
  async fetchBasicTemplates() {
    const url = `${baseUrl}/basicTemplates`;

    const { data } = await axios.get(url);

    const { basicTemplates } = data;

    return basicTemplates;
  }

  async postRecord(record) {
    const url = `${baseUrl}/upload`;

    const { data } = await axios.post(url, record);

    return data;
  }
}

export const s3ApiService = new S3ApiService();
