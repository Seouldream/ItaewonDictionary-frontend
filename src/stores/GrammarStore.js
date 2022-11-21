import { grammarApiService } from '../services/GrammarApiService';
import Store from './Store';

export default class GrammarStore extends Store {
  constructor() {
    super();

    this.grammar = {};
  }

  fetchGrammar() {
    this.grammar = grammarApiService.fetchGrammar();

    this.publish();
  }
}

export const grammarStore = new GrammarStore();
