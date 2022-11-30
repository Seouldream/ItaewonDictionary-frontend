/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class BasicTemplatesAdminApiService {
  async createBasicTemplate(basicTemplate) {
    const url = `${baseUrl}/admin/basicTemplates`;

    const {
      title, koreanSentence, englishSentence, youtubeUrl, description,
    } = basicTemplate;

    const { data } = await axios.post(url, {
      title, koreanSentence, englishSentence, youtubeUrl, description,
    });

    return {
      id: data.id,
      title: data.title,
      koreanSentence: data.koreanSentence,
      englishSentence: data.englishSentence,
      youtubeUrl: data.youtubeUrl,
      description: description.data,
    };
  }

  async updateBasicTemplate(basicTemplate) {
    const {
      title, koreanSentence, englishSentence, youtubeUrl, description,
    } = basicTemplate;

    const url = `${baseUrl}/admin/basicTemplates`;

    await axios.patch(url, {
      title, koreanSentence, englishSentence, youtubeUrl, description,
    });
  }

  async deleteBasicTemplate(id) {
    const url = `${baseUrl}/admin/basicTemplates`;

    await axios.delete(url, {
      id,
    });
  }
}

export const basicTemplatesAdminApiService = new BasicTemplatesAdminApiService();
