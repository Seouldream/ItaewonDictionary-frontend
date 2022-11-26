import server from '../util/testServer';
import GrammarAdminFormStore from './GrammarAdminFormStore';

const context = describe;

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.restoreHandlers();
});

afterAll(() => {
  server.close();
});

describe('GrammarAdminFormStore', () => {
  let grammarAdminFormStore;
  let introduction;
  let content;
  const grammar = { introduction, content };

  beforeEach(() => {
    grammarAdminFormStore = new GrammarAdminFormStore();
    introduction = '문법 안내입니다.';
    content = '문법 컨텐츠입니다.';
  });

  context('patchIntroduction', () => {
    it('updates grammar intorduction', async () => {
      await grammarAdminFormStore.patchIntroduction(introduction);
    });
  });

  context('patchContent', () => {
    it('updates grammar content', async () => {
      await grammarAdminFormStore.patchContent(content);
    });
  });

  context('createGrammar', () => {
    it('creates grammar for the first time', async () => {
      await grammarAdminFormStore.createGrammar(grammar);
    });
  });
});
