import server from '../util/testServer';
import BasicTemplatesStore from './BasicTemplatesStore';

const context = describe;

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('BasicTemplateStore', () => {
  let basicTemplatesStore;

  beforeEach(() => {
    basicTemplatesStore = new BasicTemplatesStore();
  });

  context('fetchGrammar', () => {
    it('shows first element\'details of basicTemplates ', async () => {
      await basicTemplatesStore.fetchBasicTemplates();

      const { basicTemplates } = basicTemplatesStore;

      expect(basicTemplates[0].id).toBe(1);
      expect(basicTemplates[0].title).toBe('인삿말 배우기');
      expect(basicTemplates[0].englishSentence).toBe('Hey -! How are you?');
      expect(basicTemplates[0].koreanSentence).toBe('안녕 무슨 일이야?');
      expect(basicTemplates[0].description).toMatch(/가장 기초적인 인삿말이다./);
    });

    it('shows seconds element\'details of basicTemplates ', async () => {
      await basicTemplatesStore.fetchBasicTemplates();

      const { basicTemplates } = basicTemplatesStore;

      expect(basicTemplates[1].id).toBe(2);
      expect(basicTemplates[1].title).toBe('일상에서 자기 소개하는 법 배우기');
      expect(basicTemplates[1].englishSentence).toBe('Hi -! My name is Jimin. It is good to see you!');
      expect(basicTemplates[1].koreanSentence).toBe('안녕 나는 지민이라고 해! 널 만나게 되어서 반가워!');
      expect(basicTemplates[1].description).toBe('지민같은 표현 등이 있다.');
    });
  });
});
