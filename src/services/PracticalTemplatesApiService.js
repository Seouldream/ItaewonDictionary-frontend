/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class PracticalTemplatesApiService {
  async fetchPracticalTemplatesByCategory(id) {
    const url = `${baseUrl}/practicalTemplates/categories/${id}`;

    const { data } = await axios.get(url);

    const { practicalTemplates } = data;

    return practicalTemplates;
  }

  async fetchPracticalTemplateCategories(page) {
    const url = `${baseUrl}/practicalTemplates/categories`;

    const { data } = await axios.get(url, {
      params: { page },
    });

    return data;
  }
}

export const practicalTemplatesApiService = new PracticalTemplatesApiService();
