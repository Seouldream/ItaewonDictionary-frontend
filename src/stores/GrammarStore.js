import { grammarApiService } from '../services/GrammarApiService';
import Store from './Store';

export default class GrammarStore extends Store {
  constructor() {
    super();

    this.grammar = {};

    this.grammarState = '';

    this.errorMessage = '';
  }

  async fetchGrammar() {
    try {
      this.grammar = await grammarApiService.fetchGrammar();

      const message = '';

      this.changeGrammarState('found', { errorMessage: message });

      this.publish();
    } catch (error) {
      const { message } = error.response.data;
      this.changeGrammarState('notFound', { errorMessage: message });
    }
  }

  changeGrammarState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.grammarState = state;
    this.publish();
  }

  get isNoGrammar() {
    return this.grammarState === 'notFound';
  }
}

export const grammarStore = new GrammarStore();
