import { basicTemplatesApiService } from '../services/BasicTemplatesApiService';
import Store from './Store';

export default class BasicTemplatesStore extends Store {
  constructor() {
    super();

    this.basicTemplates = [
      {
        id: 1,
        title: '인삿말 배우기',
        englishSentence: 'Hey -! How are you?',
        koreanSentence: '안녕 무슨 일이야?',
        youtubeUrl: 'https://www.youtube.com/embed/L9Ijl9fDcZs',
        description: '가장 기초적인 인삿말이다. how are you가 조금 더 보편적으로 오랜 친구를 보거나 친구를 보고 인사할때 사용하기 좋다.what is up 은 무슨일이야? 라는 의미에 조금 더 가까우므로 친구들에게 뭐하냐는 의미의 연락을 취할때 사용하기 좋은 표현이다.그외로는 … … 같은 표현 등이 있다.',
      },
      {
        id: 2,
        title: '일상에서 자기 소개하는 법 배우기',
        englishSentence: 'Hi -! My name is Jimin. It is good to see you!',
        koreanSentence: '안녕 나는 지민이라고 해! 널 만나게 되어서 반가워!',
        youtubeUrl: 'https://www.youtube.com/embed/L9Ijl9fDcZs',
        description: '지민같은 표현 등이 있다.',
      },
    ];

    this.basicTemplatesState = '';

    this.errorMessage = '';
  }

  async fetchBasicTemplates() {
    try {
      this.basicTemplate = await basicTemplatesApiService.fetchBasicTemplates();

      const message = '';

      this.changeBasicTemplatesStates('found', { errorMessage: message });

      this.publish();
    } catch (error) {
      if (error === undefined) {
        error.response.data = '';
      }
      const { message } = error.response.data;
      this.changeBasicTemplatesStates('notFound', { errorMessage: message });
    }
}

  changeBasicTemplatesStates(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.basicTemplatesState = state;
    this.publish();
  }

  get isNoBasicTemplates() {
    return this.basicTemplatesState === 'notFound';
  }
}

export const basicTemplatesStore = new BasicTemplatesStore();
