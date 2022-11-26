import { eventApiService } from '../services/EventApiService';
import Store from '../stores/Store';

export default class EventFormStore extends Store {
  constructor() {
    super();

    this.title = '';
    this.date = '';
    this.host = '';
    this.price = '';
    this.hostEmail = '';
    this.hostContact = '';
    this.onOrOffline = '';
    this.eventType = '';
    this.category = '';
    this.homepageAddress = '';
    this.imgUrl = '';
    this.hashTags = '';
    this.content = '';

    this.state = '';
  }

  changeTitle(title) {
    this.title = title;

    this.publish();
  }

  changeDate(date) {
    this.date = date;

    this.publish();
  }

  changeHost(host) {
    this.host = host;

    this.publish();
  }

  changePrice(price) {
    this.price = price;

    if (price === null) {
      this.price = '무료';
    }

    this.publish();
  }

  changeHostEmail(hostEmail) {
    this.hostEmail = hostEmail;

    this.publish();
  }

  changeHostContact(hostContact) {
    this.hostContact = hostContact;

    this.publish();
  }

  changeOnOrOffline(onOrOffline) {
    this.onOrOffline = onOrOffline;

    this.publish();
  }

  changeEventType(eventType) {
    this.eventType = eventType;

    this.publish();
  }

  changeCategory(category) {
    this.category = category;

    if (category === '버튼을 눌러 카테고리를 추가하세요') {
      this.category = '기타';
    }

    this.publish();
  }

  changeHomepageAddress(homepageAddress) {
    this.homepageAddress = homepageAddress;

    this.publish();
  }

  changeImgUrl(imgUrl) {
    this.imgUrl = imgUrl;

    this.publish();
  }

  changeHashTags(hashTags) {
    this.hashTags = hashTags;

    this.publish();
  }

  changeContent(content) {
    this.content = content;

    this.publish();
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
    await eventApiService.createEvent({
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

    this.publish();
  }

  changeState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.state = state;
    this.publish();
  }
}

export const eventFormStore = new EventFormStore();
