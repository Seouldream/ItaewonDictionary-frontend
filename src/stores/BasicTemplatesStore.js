import { basicTemplatesApiService } from '../services/BasicTemplatesApiService';
import Store from './Store';

export default class BasicTemplatesStore extends Store {
  constructor() {
    super();

    this.basicTemplates = [];

    this.basicTemplatesState = '';

    this.errorMessage = '';
  }

  async fetchBasicTemplates() {
    try {
      this.basicTemplates = await basicTemplatesApiService.fetchBasicTemplates();

      const message = '';

      this.changeBasicTemplatesStates('found', { errorMessage: message });

      this.publish();
    } catch (error) {
      if (error === undefined) {
        error.response.data = '';
      }
      const { message } = error.response.data;
      this.changeBasicTemplatesStates('notFound', { errorMessage: message });
    }
  }

  changeBasicTemplatesStates(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.basicTemplatesState = state;
    this.publish();
  }

  get isNoBasicTemplates() {
    return this.basicTemplatesState === 'notFound';
  }
}

export const basicTemplatesStore = new BasicTemplatesStore();
