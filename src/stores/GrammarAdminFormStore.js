import { grammarApiService } from '../services/GrammarApiService';
import Store from './Store';

export default class GrammarAdminFormStore extends Store {
  constructor() {
    super();

    this.introduction = '';
    this.content = '';

    this.state = '';
  }

  changeIntroduction(introduction) {
    this.introduction = introduction;

    this.publish();
  }

  changeContent(content) {
    this.content = content;

    this.publish();
  }

  async createGrammar({
    introduction, content,
  }) {
    await grammarApiService.createGrammar({
      introduction, content,
    });

    this.publish();
  }

  async patchIntroduction({
    introduction,
  }) {
    await grammarApiService.patchIntroduction({
      introduction,
    });

    this.publish();
  }

  async patchContent({
    content,
  }) {
    await grammarApiService.patchContent({
      content,
    });

    this.publish();
  }

  changeState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.state = state;
    this.publish();
  }
}
export const grammarAdminFormStore = new GrammarAdminFormStore();
