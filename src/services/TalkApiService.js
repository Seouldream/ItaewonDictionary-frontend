/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class TalkApiService {
  async fetchTalks() {
    const url = `${baseUrl}/talks`;

    const { data } = await axios.get(url);

    const { talks, pageNumber } = data;

    return { talks, pageNumber };
  }

  async changePageNumber(number) {
    const url = `${baseUrl}/talks`;

    const { data } = await axios.get(url, {
      params: {
        page: number,
      },
    });

    return data.talks;
  }
}

export const talkApiService = new TalkApiService();
