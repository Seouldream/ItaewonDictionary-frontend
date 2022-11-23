/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class EventApiService {
  async fetchEvents() {
    const url = `${baseUrl}/events`;

    const { data } = await axios.get(url);

    const { events, pageNumber } = data;

    return { events, pageNumber };
  }

  async changePageNumber(number) {
    const url = `${baseUrl}/events`;

    const { data } = await axios.get(url, {
      params: {
        page: number,
      },
    });

    return data.events;
  }

  async fetchEvent(id) {
    const url = `${baseUrl}/events/${id}`;
    const { data } = await axios.get(url);

    return data;
  }

  async createEvent({
    title,
    date,
    host,
    price,
    hostEmail,
    hostContact,
    onOrOffline,
    eventType,
    category,
    homepageAddress,
    imgUrl,
    hashTags,
    content,
  }) {
    const url = `${baseUrl}/events/post`;
    await axios.post(url, {
      title,
      date,
      host,
      price,
      hostEmail,
      hostContact,
      onOrOffline,
      eventType,
      category,
      homepageAddress,
      imgUrl,
      hashTags,
      content,
    });
  }
}

export const eventApiService = new EventApiService();
