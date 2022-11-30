import { basicTemplatesAdminApiService } from '../services/BasicTemplatesAdminApiService';
import Store from './Store';

export default class BasicTemplatesAdminFormStore extends Store {
  constructor() {
    super();

    // this.basicTemplates = [];

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

    this.basicTemplateForm = {
      title: '',
      koreanSentence: '',
      englishSentence: '',
      description: '',
      youtubeUrl: '',
    };

    this.state = '';
  }

  async createBasicTemplate(
    basicTemplate,
  ) {
    await basicTemplatesAdminApiService.createBasicTemplate(basicTemplate);

    this.publish();
  }

  async updateBasicTemplate(
    basicTemplate,
  ) {
    await basicTemplatesAdminApiService.updateBasicTemplate(
      basicTemplate,
    );

    this.publish();
  }

  async deleteBasicTemplate(
    id,
  ) {
    await basicTemplatesAdminApiService.deleteBasicTemplate(
      id,
    );

    this.publish();
  }

  fetchBasicTemplate(id) {
    const found = this.basicTemplates.find((template) => (
      template.id === id
    ));

    this.basicTemplateForm = { ...found };

    this.publish();
  }

  changeTitle(title) {
    this.basicTemplateForm.title = title;

    this.publish();
  }

  changeEnglishSentence(englishSentence) {
    this.basicTemplateForm.englishSentence = englishSentence;

    this.publish();
  }

  changeKoreanSentence(koreanSentence) {
    this.basicTemplateForm.koreanSentence = koreanSentence;

    this.publish();
  }

  changeDescription(description) {
    this.basicTemplateForm.description = description;

    this.publish();
  }

  changeYoutubeUrl(youtubeUrl) {
    this.basicTemplateForm.youtubeUrl = youtubeUrl;

    this.publish();
  }

  clearTextArea() {
    this.basicTemplateForm = {
      title: '',
      koreanSentence: '',
      englishSentence: '',
      description: '',
      youtubeUrl: '',
    };
  }

  changeState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.state = state;
    this.publish();
  }
}
export const basicTemplatesAdminFormStore = new BasicTemplatesAdminFormStore();
