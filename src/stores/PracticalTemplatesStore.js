import { practicalTemplatesApiService } from '../services/PracticalTemplatesApiService';
import Store from './Store';

export default class PracticalTemplatesStore extends Store {
  constructor() {
    super();

    this.practicalTemplateCategories = [];

    this.category = {};

    this.practicalTemplates = [];

    this.practicalTemplatesState = '';

    this.totalPages = 0;

    this.errorMessage = '';
  }

  async fetchPracticalTemplateCategories(page) {
    const { practicalTemplateCategories, pages } = await practicalTemplatesApiService
      .fetchPracticalTemplateCategories(page);

    this.practicalTemplateCategories = practicalTemplateCategories;

    this.totalPages = pages.totalPages;

    this.publish();
  }

  async fetchPracticalTemplatesByCategory(id) {
    // this.practicalTemplates = await practicalTemplatesApiService
    //   .fetchPracticalTemplatesByCategory(id);

    const fetchedTemplates = await practicalTemplatesApiService
      .fetchPracticalTemplatesByCategory(id);

    const practicalTemplatesWithAnswers = fetchedTemplates.map((item) => (
      { ...item, answer: '' }
    ));

    this.practicalTemplates = practicalTemplatesWithAnswers;

    this.publish();
  }

  async fetchCategory(id) {
    this.practicalTemplateCategories = await practicalTemplatesApiService
      .fetchPracticalTemplateCategories();

    const foundCategory = this.practicalTemplateCategories.find((category) => (
      category.id === id
    ));

    this.category = { ...foundCategory };

    this.publish();
  }

  changeAnswer(answer, id) {
    const foundPracticalTemplate = this.practicalTemplates.find((item) => (
      item.id === id
    ));

    foundPracticalTemplate.answer = answer;

    this.publish();
  }

  changePracticalTemplatesStates(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.PracticalTemplatesState = state;
    this.publish();
  }

  get isNoPracticalTemplates() {
    return this.PracticalTemplatesState === 'notFound';
  }
}

export const practicalTemplatesStore = new PracticalTemplatesStore();
