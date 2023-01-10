import { communityApiService } from '../services/CommunityApiService';
import Store from './Store';

export default class CommunityStore extends Store {
  constructor() {
    super();

    this.activities = [];

    this.totalPages = '';

    this.activity = '';

    this.activityForm = {
      title: '',
      content: '<p><strong>활동소개</strong>&nbsp;: 활동 소개말을 써주세요.</p><p><strong>활동이름</strong>&nbsp;: 팀 이름을 정해주세요!</p><p><strong>활동</strong> <strong>목표</strong>&nbsp;: 예) 영어를 잘하고싶은 여러사람들을 알아가고싶어요!</p><p><strong>날짜</strong>&nbsp;:&nbsp;</p><p><strong>장소</strong>&nbsp;:&nbsp;</p><p><strong>스터디 관련 규칙</strong>&nbsp;: 스터디원들이 서로 기분 좋은 경험을 할 수 있도록 지켜야할 규칙을 써주세요.</p><p><strong>스터디에 지원할 수 있는 방법을 남겨주세요. (이메일, 카카오 오픈채팅방, 구글폼 등.)</strong></p>',
    };
  }

  async fetchActivities(page) {
    const { activities, pages } = await communityApiService.fetchActivities(page);

    this.activities = activities;

    this.totalPages = pages.totalPages;

    this.publish();
  }

  async fetchActivity(id) {
    this.activity = await communityApiService.fetchActivity(id);

    this.publish();
  }

  changeTitle(title) {
    this.activityForm.title = title;

    this.publish();
  }

  changeContent(content) {
    this.activityForm.content = content;

    this.publish();
  }

  async createActivity(accessToken) {
    await communityApiService.createActivity(this.activityForm, accessToken);

    this.activityForm = {
      title: '',
      content: '<p><strong>활동소개</strong>&nbsp;: 활동 소개말을 써주세요.</p><p><strong>활동이름</strong>&nbsp;: 팀 이름을 정해주세요!</p><p><strong>활동</strong> <strong>목표</strong>&nbsp;: 예) 영어를 잘하고싶은 여러사람들을 알아가고싶어요!</p><p><strong>날짜</strong>&nbsp;:&nbsp;</p><p><strong>장소</strong>&nbsp;:&nbsp;</p><p><strong>스터디 관련 규칙</strong>&nbsp;: 스터디원들이 서로 기분 좋은 경험을 할 수 있도록 지켜야할 규칙을 써주세요.</p><p><strong>스터디에 지원할 수 있는 방법을 남겨주세요. (이메일, 카카오 오픈채팅방, 구글폼 등.)</strong></p>',
    };

    this.publish();
  }

  clearActivity() {
    this.activityForm = {
      title: '',
      content: '',
    };

    this.record = '';
  }
}

export const communityStore = new CommunityStore();
