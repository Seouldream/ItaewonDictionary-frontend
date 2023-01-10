/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../util/config';

const baseUrl = config.apiBaseUrl;

export default class CommunityApiService {
  async fetchActivities(page) {
    const url = `${baseUrl}/activity`;

    const { data } = await axios.get(url, {
      params: { page },
    });

    return data;
  }

  async fetchActivity(id) {
    const url = `${baseUrl}/activity/${id}`;

    const { data } = await axios.get(url);

    const activity = data;

    return activity;
  }

  async createActivity(activityForm, accessToken) {
    const url = `${baseUrl}/activity`;

    const { title, content } = activityForm;

    const { data } = await axios.post(url, { title, content }, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }

  async createComment(content, id, accessToken) {
    const url = `${baseUrl}/activity/comments/${id}`;

    const { data } = await axios.post(url, { content }, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }

  async fetchCommentsByActivityId(id) {
    const url = `${baseUrl}/activity/comments/${id}`;

    const { data } = await axios.get(url);
    return data;
  }
}

export const communityApiService = new CommunityApiService();
