/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(

  rest.get(`${baseUrl}/grammar`, async (req, res, ctx) => res(ctx.json(
    {
      id: 1,
      introduction: '문법 인트로덕션입니다.',
      content: '문장의 형식',
    },
  ))),

  rest.patch(`${baseUrl}/admin/grammar-introduction`, async (req, res, ctx) => {
    const { introduction } = await req.json();

    return res(
      ctx.status(204),
    );
  }),

  rest.patch(`${baseUrl}/admin/grammar-content`, async (req, res, ctx) => {
    const { content } = await req.json();

    return res(
      ctx.status(204),
    );
  }),

  rest.post(`${baseUrl}/admin/grammar`, async (req, res, ctx) => {
    const { introduction, content } = await req.json();

    return res(
      ctx.json(
        {
          id: 1,
          introduction: '문법 첫 안내 글',
          content: '문장의 5형식에 관한 첫 글입니다.',
        },
      ),
    );
  }),

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

  rest.post(`${baseUrl}/events/post/new`, async (req, res, ctx) => {
    const {
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
    } = await req.json();

    return res(
      ctx.data({
        id: 1,
        title: '2022 빼빼로 이벤트 기념',
        date: '11월 11일(금)오프라인',
        host: '롯데제과',
        price: '무료',
        hostEmail: 'Lotte2021@google.com',
        hostContact: '010-1123-3534',
        onOrOffline: '온라인',
        eventType: '광고',
        category: '프로그래밍',
        homepageAddress: 'https://megaptera.kr/',
        imgUrl: 'https://cdn.pixabay.com/photo/2022/10/20/12/36/germany-7534750__480.jpg',
        hashTags: ['솔로', '커플지옥'],
        content: '기존 솔로들에게 어마어마한 압도적 혜택이 있습니다.',
      }),
    );
  }),
);

export default server;
