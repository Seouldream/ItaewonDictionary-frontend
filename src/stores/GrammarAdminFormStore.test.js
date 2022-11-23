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
  beforeEach(() => {
    grammarAdminFormStore = new GrammarAdminFormStore();
    introduction = '아무거나입니다.';
  });

  context('patchIntroduction', () => {
    it('updates grammar intorduction', async () => {
      await grammarAdminFormStore.patchIntroduction(introduction);
    });
  });
});
