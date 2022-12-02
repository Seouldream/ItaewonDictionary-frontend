/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class BasicTemplatesAdminApiService {
  async fetchBasicTemplates() {
    const url = `${baseUrl}/basicTemplates`;

    const { data } = await axios.get(url);

    const { basicTemplates } = data;

    return basicTemplates;
  }

  async createBasicTemplate(basicTemplate) {
    const url = `${baseUrl}/admin/basicTemplates`;

    const {
      title, englishSentence, koreanSentence, youtubeUrl, description,
    } = basicTemplate;

    const { data } = await axios.post(url, {
      title, englishSentence, koreanSentence, youtubeUrl, description,
    });

    return {
      id: data.id,
      title: data.title,
      englishSentence: data.englishSentence,
      koreanSentence: data.koreanSentence,
      youtubeUrl: data.youtubeUrl,
      description: description.data,
    };
  }

  async updateBasicTemplate(id, basicTemplate) {
    const url = `${baseUrl}/admin/basicTemplates/${id}`;

    const {
      title, englishSentence, koreanSentence, youtubeUrl, description,
    } = basicTemplate;

    await axios.patch(url, {
      title, englishSentence, koreanSentence, youtubeUrl, description,
    });
  }

  async deleteBasicTemplate(id) {
    const url = `${baseUrl}/admin/basicTemplates/${id}`;

    await axios.delete(url);
  }
}

export const basicTemplatesAdminApiService = new BasicTemplatesAdminApiService();
