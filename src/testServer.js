/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './util/config';

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

  rest.get(`${baseUrl}/basicTemplates`, async (req, res, ctx) => res(ctx.json(
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
  ))),
);

export default server;
