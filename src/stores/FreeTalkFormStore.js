import { freeTalkApiService } from '../services/FreeTalkApiService';
import Store from './Store';

export default class FreeTalkFormStore extends Store {
  constructor() {
    super();

    this.state = '';
  }

  async createFreeTalk({
    title, hashTags, content,
  }) {
    try {
      await freeTalkApiService.createFreeTalk({
        title, hashTags, content,
      });
    } catch (e) {
      const { errorMessage } = e.response.data;
      if (errorMessage === '입력하지않은 내용이 있어요!.') {
        this.changeState('blankInput', { errorMessage });
      }
    }
  }

  changeState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.state = state;
    this.publish();
  }
}

export const freeTalkFormStore = new FreeTalkFormStore();
