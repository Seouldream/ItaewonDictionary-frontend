import { talkApiService } from '../services/TalkApiService';
import Store from './Store';

export default class TalkFormStore extends Store {
  constructor() {
    super();

    this.writer = '';
    this.title = '';
    this.hashTags = '';
    this.content = '';

    this.state = '';
  }

  changeTitle(title) {
    this.title = title;

    this.publish();
  }

  changeHashTags(hashTags) {
    this.hashTags = hashTags;

    this.publish();
  }

  changeContent(content) {
    this.content = content;

    this.publish();
  }

  async createTalk({
    title, hashTags, content,
  }) {
    await talkApiService.createFreeTalk({
      title, hashTags, content,

    });

    this.publish();
  }

  changeState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.state = state;
    this.publish();
  }
}
export const talkFormStore = new TalkFormStore();
