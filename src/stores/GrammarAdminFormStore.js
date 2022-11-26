import { grammarAdminApiService } from '../services/GrammarAdminApiService';
import Store from './Store';

export default class GrammarAdminFormStore extends Store {
  constructor() {
    super();

    this.introduction = '';
    this.content = '';

    this.state = '';
  }

  async createGrammar(
    grammar,
  ) {
    const { introduction, content } = grammar;

    await grammarAdminApiService.createGrammar({ introduction, content });

    this.publish();
  }

  async patchIntroduction(
    introduction,
  ) {
    await grammarAdminApiService.patchIntroduction(
      introduction,
    );

    this.publish();
  }

  async patchContent(
    content,
  ) {
    await grammarAdminApiService.patchContent(
      content,
    );

    this.publish();
  }

  clearTextArea() {
    this.introduction = '';
    this.content = '';
  }

  changeIntroduction(introduction) {
    this.introduction = introduction;

    this.publish();
  }

  changeContent(content) {
    this.content = content;

    this.publish();
  }

  changeState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.state = state;
    this.publish();
  }
}
export const grammarAdminFormStore = new GrammarAdminFormStore();
