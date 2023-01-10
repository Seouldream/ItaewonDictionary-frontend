import { speakPracticesApiService } from '../services/SpeakPracticesApiService';
import Store from './Store';

export default class SpeakPracticeCommentsStore extends Store {
  constructor() {
    super();

    this.comment = '';

    this.comments = [];
  }

  async fetchCommentsByPracticeId(id) {
    const { practiceComments } = await
    speakPracticesApiService.fetchCommentsByPracticalTemplateId(id);

    this.comments = practiceComments;

    this.comment = '';

    this.publish();
  }

  async createComment(practicalTemplateId, accessToken) {
    await speakPracticesApiService.createComment(this.comment, practicalTemplateId, accessToken);

    this.comment = '';

    this.publish();
  }

  changeComment(comment) {
    this.comment = comment;

    this.publish();
  }
}

export const speakPracticeCommentsStore = new SpeakPracticeCommentsStore();
