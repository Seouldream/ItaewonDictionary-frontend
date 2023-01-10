/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class PracticalTemplatesAdminApiService {
  async fetchPracticalTemplates() {
    const url = `${baseUrl}/practicalTemplates`;

    const { data } = await axios.get(url);

    const { practicalTemplates } = data;

    return practicalTemplates;
  }

  async createPracticalTemplate(practicalTemplate, formData) {
    const url = `${baseUrl}/admin/practicalTemplate`;

    const {
      category, title, description, koreanSentence, bestPractice,
    } = practicalTemplate;

    formData.append('practicalTemplate', JSON.stringify(practicalTemplate));

    const { data } = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return {
      id: data.id,
      categoryId: data.categoryId,
      title: data.title,
      description: data.description,
      koreanSentence: data.koreanSentence,
      bestPractice: data.bestPractice,
    };
  }

  async updatePracticalTemplate(id, practicalTemplate) {
    const url = `${baseUrl}/admin/practicalTemplate/${id}`;

    const {
      category, title, description, koreanSentence, bestPractice,
    } = practicalTemplate;

    await axios.patch(url, {
      category, title, description, koreanSentence, bestPractice,
    });
  }

  async deletePracticalTemplate(id) {
    const url = `${baseUrl}/admin/practicalTemplate/${id}`;

    await axios.delete(url);
  }

  async deleteCategories(categories) {
    const url = `${baseUrl}/admin/practicalTemplate/categories`;

    await axios.delete(url, {
      data: { categories },
    });
  }
}

export const practicalTemplatesAdminApiService = new PracticalTemplatesAdminApiService();
