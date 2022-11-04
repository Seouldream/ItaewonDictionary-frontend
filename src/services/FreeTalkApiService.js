/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class FreeTalkApiService {
  async fetchFreeTalks() {
    const url = `${baseUrl}/freeTalks`;

    const { data } = await axios.get(url);

    const { freeTalks, pageNumber } = data;

    return { freeTalks, pageNumber };
  }

  async changePageNumber(number) {
    const url = `${baseUrl}/freeTalks`;

    const { data } = await axios.get(url, {
      params: {
        page: number,
      },
    });

    return data.freeTalks;
  }

  async fetchFreeTalk(id) {
    const url = `${baseUrl}/freeTalks/${id}`;
    const { data } = await axios.get(url);

    return data;
  }

  async createFreeTalk({
    title, freeTalkHashTags, content,
  }) {
    const url = `${baseUrl}/freeTalks/post`;
    await axios.post(url, {
      title, freeTalkHashTags, content,
    });
  }
}

export const freeTalkApiService = new FreeTalkApiService();
