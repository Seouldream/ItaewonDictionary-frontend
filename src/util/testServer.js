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

  // res(ctx.status(400), ctx.json(
  //   { code: 1001, message: '그래마가 아직 존재하지 않아요! 업데이트를 기다려주세요!' },
  // ));

  rest.get(`${baseUrl}/basicTemplates`, async (req, res, ctx) => {
    console.log('rr');

    res(ctx.json(
      {
        basicTemplates: [
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
        ],
      },
    ));
    return res(
      ctx.status(400),
      ctx.json(
        {
          code: 1001, message: 'message!!!',
        },
      ),
    );
  }),
  // const { data } = req.json();

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
