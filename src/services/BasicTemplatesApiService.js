/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class BasicTemplatesApiService {
  async fetchBasicTemplate() {
    const url = `${baseUrl}/basicTemplate`;

    const { data } = await axios.get(url);

    const {
      id, title, englishSentence, koreanSentence, youtubeUrl, description,
    } = data;

    return {
      id, title, englishSentence, koreanSentence, youtubeUrl, description,
    };
  }
}

export const basicTemplatesApiService = new BasicTemplatesApiService();
