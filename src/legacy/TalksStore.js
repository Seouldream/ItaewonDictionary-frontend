import { talkApiService } from '../services/TalkApiService';
import Store from './Store';

export default class TalksStore extends Store {
  constructor() {
    super();

    this.pageNumbers = [];

    this.freeTalks = [];

    this.freeTalk = [];
  }

  async fetchFreeTalks() {
    this.freeTalks = [];
    this.publish();

    const { freeTalks, pageNumber } = await talkApiService.fetchFreeTalks();

    this.freeTalks = freeTalks;
    this.pageNumbers = [...Array(pageNumber)].map((number, index) => index + 1);

    this.publish();
  }

  async fetchFreeTalk(id) {
    this.freeTalk = [];
    this.publish();

    const data = await talkApiService.fetchFreeTalk(id);

    this.freeTalk = data;

    this.publish();
  }

  async changePageNumber(number) {
    this.FreeTalks = [];

    this.FreeTalks = await talkApiService.changePageNumber(number);
    this.publish();
  }
}

export const talksStore = new TalksStore();
