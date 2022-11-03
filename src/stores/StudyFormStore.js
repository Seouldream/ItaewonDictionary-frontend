import { studyApiService } from '../services/StudyApiService';
import Store from './Store';

export default class StudyFormStore extends Store {
  constructor() {
    super();

    this.state = '';
  }

  async createStudy({
    title, topic, place, time, participants, hashTags, content,
  }) {
    try {
      await studyApiService.createStudy({
        title, topic, place, time, participants, hashTags, content,
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

export const studyFormStore = new StudyFormStore();
