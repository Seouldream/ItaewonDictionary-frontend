import { studyApiService } from '../services/StudyApiService';
import Store from './Store';

export default class StudiesStore extends Store {
  constructor() {
    super();

    this.pageNumbers = [];

    this.studies = [];
  }

  async fetchStudies() {
    this.studies = [];
    this.publish();

    const { studies, pageNumber } = await studyApiService.fetchStudies();

    this.studies = studies;
    this.pageNumbers = [...Array(pageNumber)].map((number, index) => index + 1);

    this.publish();
  }

  async changePageNumber(number) {
    this.studies = [];

    this.studies = await studyApiService.changePageNumber(number);
    this.publish();
  }
}

export const studiesStore = new StudiesStore();
