/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class StudyApiService {
  async fetchStudies() {
    const url = `${baseUrl}/studies`;

    const { data } = await axios.get(url);
    console.log('Data', data);
    const { studies, pageNumber } = data;

    return { studies, pageNumber };
  }

  async changePageNumber(number) {
    const url = `${baseUrl}/studies`;

    const { data } = await axios.get(url, {
      params: {
        page: number,
      },
    });

    return data.studies;
  }

  async createStudy({
    title, topic, place, time, participants, hashTags, content,
  }) {
    const url = `${baseUrl}/studies/post`;
    await axios.post(url, {
      title, topic, place, time, participants, hashTags, content,
    });
  }
}

export const studyApiService = new StudyApiService();
