/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class GrammarAdminApiService {
  async createGrammar({ introduction, content }) {
    const url = `${baseUrl}/admin/grammar`;

    const { data } = await axios.post(url, {
      introduction, content,
    });

    return {
      id: data.id,
      introduction: data.introduction,
      content: data.content,
    };
  }

  async patchIntroduction(introduction) {
    const url = `${baseUrl}/admin/grammar-introduction`;

    await axios.patch(url, {
      introduction,
    });
  }

  async patchContent(content) {
    console.log('content', content);

    const url = `${baseUrl}/admin/grammar-content`;

    await axios.patch(url, {
      content,
    });
  }
}

export const grammarAdminApiService = new GrammarAdminApiService();
