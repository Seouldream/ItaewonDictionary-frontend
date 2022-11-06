import { freeTalkApiService } from '../services/FreeTalkApiService';
import Store from './Store';

export default class FreeTalkFormStore extends Store {
  constructor() {
    super();

    this.writer = '';
    this.title = '';
    this.freeTalkHashTags = '';
    this.content = '';

    this.state = '';
  }

  changeTitle(title) {
    this.title = title;

    this.publish();
  }

  changeHashTags(freeTalkHashTags) {
    this.freeTalkHashTags = freeTalkHashTags;

    this.publish();
  }

  changeContent(content) {
    this.content = content;

    this.publish();
  }

  async createFreeTalk({
    title, freeTalkHashTags, content,
  }) {
    console.log('content', content);

    await freeTalkApiService.createFreeTalk({
      title, freeTalkHashTags, content,

    });

    this.publish();
  }

  changeState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.state = state;
    this.publish();
  }
}
export const freeTalkFormStore = new FreeTalkFormStore();
