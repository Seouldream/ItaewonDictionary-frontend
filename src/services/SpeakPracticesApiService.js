/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class SpeakPracticesApiService {
  async fetchPractices(page) {
    const url = `${baseUrl}/practices`;

    const { data } = await axios.get(url, {
      params: { page },
    });

    return data;
  }

  async fetchPractice(id) {
    const url = `${baseUrl}/practice/${id}`;

    const { data } = await axios.get(url);

    const practice = data;

    return practice;
  }

  async createPractice(practiceForm, formData, accessToken) {
    const url = `${baseUrl}/practice/new`;

    formData.append('practice', JSON.stringify(practiceForm));

    console.log(accessToken);

    const { data } = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return {
      id: data.id,
      title: data.title,
      situation: data.situation,
      englishScript: data.englishScript,
      koreanScript: data.koreanScript,
      recordUrl: data.recordUrl,
    };
  }

  async createComment(content, id, accessToken) {
    const url = `${baseUrl}/practice/comments/${id}`;

    const { data } = await axios.post(url, { content }, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }

  async fetchCommentsByPracticalTemplateId(id) {
    const url = `${baseUrl}/practice/comments/${id}`;

    const { data } = await axios.get(url);

    return data;
  }
}

export const speakPracticesApiService = new SpeakPracticesApiService();
