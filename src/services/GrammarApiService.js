/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class GrammarApiService {
  async fetchGrammar() {
    const url = `${baseUrl}/grammar`;

    const { data } = await axios.get(url);

    const { id, introduction, content } = data;

    return { id, introduction, content };
  }

  async patchIntroduction(introduction) {
    const url = `${baseUrl}/grammar/admin`;

    await axios.patch(url, {
      introduction,
    });
  }
}

export const grammarApiService = new GrammarApiService();
