import { freeTalkApiService } from '../services/FreeTalkApiService';
import Store from './Store';

export default class FreeTalksStore extends Store {
  constructor() {
    super();

    this.pageNumbers = [];

    this.freeTalks = [];

    this.freeTalk = [];
  }

  async fetchFreeTalks() {
    this.freeTalks = [];
    this.publish();

    const { freeTalks, pageNumber } = await freeTalkApiService.fetchFreeTalks();

    this.freeTalks = freeTalks;
    this.pageNumbers = [...Array(pageNumber)].map((number, index) => index + 1);

    this.publish();
  }

  async fetchFreeTalk(id) {
    this.freeTalk = [];
    this.publish();

    const data = await freeTalkApiService.fetchFreeTalk(id);

    this.freeTalk = data;

    this.publish();
  }

  async changePageNumber(number) {
    this.FreeTalks = [];

    this.FreeTalks = await freeTalkApiService.changePageNumber(number);
    this.publish();
  }
}

export const freeTalksStore = new FreeTalksStore();
