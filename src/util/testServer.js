/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.get(`${baseUrl}/studies`, async (req, res, ctx) => res(ctx.json({
    studies: [
      {
        id: 1,
        writer: '로지',
        title: '첫 커뮤니티 글!',
        content: '자바하실 분',
        likes: 12,
        registrationDate: '2022-10-06',
        views: 10,
        hashTags: [{ id: 1, tag: 'tag' }, { id: 2, tag: 'java' }],
      },
    ],
  }))),

);

export default server;
