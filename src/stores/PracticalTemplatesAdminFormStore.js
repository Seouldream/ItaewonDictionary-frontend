import { practicalTemplatesAdminApiService } from '../services/PracticalTemplatesAdminApiService';
import { s3ApiService } from '../services/S3ApiService';

import Store from './Store';

export default class PracticalTemplatesAdminFormStore extends Store {
  constructor() {
    super();

    this.categories = [];

    this.practicalTemplates = [];

    this.practicalTemplateForm = {
      category: '',
      title: '',
      description: '',
      koreanSentence: '',
      bestPractice: '',
    };

    this.record = '';

    this.state = '';
  }

  isChecked(id) {
    const { categories } = this;

    if (this.categories.includes(id)) {
      this.categories = this.categories.filter((categoryId) => (
        categoryId !== id
      ));

      return;
    }

    if (!this.categories.includes(id)) {
      this.categories = [...categories, id];
    }

    this.publish();
  }

  fetchTemplateContents(category, practicalTemplate) {
    this.practicalTemplateForm.category = category;
    this.practicalTemplateForm.title = practicalTemplate.title;
    this.practicalTemplateForm.description = practicalTemplate.description;
    this.practicalTemplateForm.koreanSentence = practicalTemplate.koreanSentence;
    this.practicalTemplateForm.bestPractice = practicalTemplate.bestPractice;

    this.publish();
  }

  async createPracticalTemplate(
    practicalTemplate,
  ) {
    await practicalTemplatesAdminApiService.createPracticalTemplate(practicalTemplate, this.record);

    this.publish();
  }

  async postRecord() {
    const data = this.record;

    await s3ApiService.postRecord(data);

    this.publish();
  }

  async updatePracticalTemplate(practicalTemplateId, updatedpracticalTemplate) {
    await practicalTemplatesAdminApiService
      .updatePracticalTemplate(practicalTemplateId, updatedpracticalTemplate);

    this.publish();
  }

  async deletePracticalTemplate(
    id,
  ) {
    await practicalTemplatesAdminApiService.deletePracticalTemplate(
      id,
    );

    this.publish();
  }

  async deleteCategories() {
    await practicalTemplatesAdminApiService.deleteCategories(
      this.categories,
    );

    this.categories = [];
    this.publish();
  }

  fetchPracticalTemplate(id) {
    const found = this.practicalTemplates.find((template) => (
      template.id === id
    ));

    this.practicalTemplateForm = { ...found };

    this.publish();
  }

  changeCategory(category) {
    this.practicalTemplateForm.category = category;

    this.publish();
  }

  changeTitle(title) {
    this.practicalTemplateForm.title = title;

    this.publish();
  }

  changeDescription(description) {
    this.practicalTemplateForm.description = description;

    this.publish();
  }

  changeKoreanSentence(koreanSentence) {
    this.practicalTemplateForm.koreanSentence = koreanSentence;

    this.publish();
  }

  changeBestPractice(bestPractice) {
    this.practicalTemplateForm.bestPractice = bestPractice;

    this.publish();
  }

  changeRecord(record) {
    this.record = record;

    this.publish();
  }

  clearPracticalTemplate() {
    this.practicalTemplateForm = {
      title: '',
      koreanSentence: '',
      englishSentence: '',
      description: '',
      youtubeUrl: '',
    };
  }

  changeState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.state = state;
    this.publish();
  }
}

export const practicalTemplatesAdminFormStore = new PracticalTemplatesAdminFormStore();
