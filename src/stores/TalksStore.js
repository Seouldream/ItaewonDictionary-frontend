import { talkApiService } from '../services/TalkApiService';
import Store from './Store';

export default class TalksStore extends Store {
  constructor() {
    super();

    this.pageNumbers = [];

    this.talks = [];
  }

  async fetchTalks() {
    this.talks = [];
    this.publish();

    const { talks, pageNumber } = await talkApiService.fetchTalks();

    this.talks = talks;
    this.pageNumbers = [...Array(pageNumber)].map((number, index) => index + 1);

    this.publish();
  }

  async changePageNumber(number) {
    this.talks = [];

    this.talks = await talkApiService.changePageNumber(number);
    this.publish();
  }
}

export const talksStore = new TalksStore();
