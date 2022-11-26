import { eventApiService } from '../services/EventApiService';
import Store from './Store';

export default class EventsStore extends Store {
  constructor() {
    super();

    this.pageNumbers = [];

    this.events = [];

    this.event = [];
  }

  async fetchEvents() {
    this.events = [];
    this.publish();

    const { events, pageNumber } = await eventApiService.fetchEvents();

    this.events = events;
    this.pageNumbers = [...Array(pageNumber)].map((number, index) => index + 1);

    this.publish();
  }

  async fetchEvent(id) {
    this.event = [];
    this.publish();

    const data = await eventApiService.fetchEvent(id);

    this.event = data;

    this.publish();
  }

  async changePageNumber(number) {
    this.events = [];

    this.events = await eventApiService.changePageNumber(number);
    this.publish();
  }
}

export const eventsStore = new EventsStore();
