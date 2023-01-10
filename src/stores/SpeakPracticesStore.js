import { speakPracticesApiService } from '../services/SpeakPracticesApiService';
import Store from './Store';

export default class SpeakPracticesStore extends Store {
  constructor() {
    super();

    this.practices = [];

    this.totalPages = '';

    this.practice = '';

    this.practiceForm = {
      title: '',
      situation: '',
      englishScript: '',
      koreanScript: '',
      userNickname: '',
    };

    this.record = '';
  }

  async fetchPractices(page) {
    const { practices, pages } = await speakPracticesApiService.fetchPractices(page);

    this.practices = practices;

    this.totalPages = pages.totalPages;

    this.publish();
  }

  async fetchPractice(id) {
    this.practice = await speakPracticesApiService.fetchPractice(id);

    this.publish();
  }

  changeTitle(title) {
    this.practiceForm.title = title;

    this.publish();
  }

  changeSituation(situation) {
    this.practiceForm.situation = situation;

    this.publish();
  }

  changeKoreanScript(koreanScript) {
    this.practiceForm.koreanScript = koreanScript;

    this.publish();
  }

  changeEnglishScript(englishScript) {
    this.practiceForm.englishScript = englishScript;

    this.publish();
  }

  changeRecord(record) {
    this.record = record;

    this.publish();
  }

  async createPractice() {
    await speakPracticesApiService.createPractice(this.practiceForm, this.record);

    this.publish();
  }

  clearPracticeTemplate() {
    this.practiceForm = {
      title: '',
      situation: '',
      englishScript: '',
      koreanScript: '',
    };

    this.record = '';
  }
}

export const speakPracticesStore = new SpeakPracticesStore();
