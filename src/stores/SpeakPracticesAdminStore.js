import { speakPracticesAdminApiService } from '../services/SpeakPracticesAdminApiService';

import Store from './Store';

export default class SpeakPracticesAdminStore extends Store {
  constructor() {
    super();

    this.practice = '';
  }

  async deletePractice(id) {
    await speakPracticesAdminApiService.deletePractice(id);

    this.publish();
  }
}

export const speakPracticesAdminStore = new SpeakPracticesAdminStore();
