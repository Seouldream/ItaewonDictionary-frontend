import { communityApiService } from '../services/CommunityApiService';
import Store from './Store';

export default class ActivityCommentsStore extends Store {
  constructor() {
    super();

    this.comment = '';

    this.comments = [];
  }

  async fetchCommentsByActivityId(id) {
    const { activityComments } = await communityApiService.fetchCommentsByActivityId(id);

    this.comments = activityComments;

    this.comment = '';

    this.publish();
  }

  async createComment(activityId, accessToken) {
    await communityApiService.createComment(this.comment, activityId, accessToken);

    this.comment = '';

    this.publish();
  }

  changeComment(comment) {
    this.comment = comment;

    this.publish();
  }
}

export const activityCommentsStore = new ActivityCommentsStore();
