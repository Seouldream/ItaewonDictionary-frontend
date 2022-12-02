import GrammarStore from './GrammarStore';

const context = describe;

describe('GrammarStore', () => {
  let grammarStore;

  beforeEach(() => {
    grammarStore = new GrammarStore();
  });

  context('fetchGrammar', () => {
    it('sets grammar information', async () => {
      await grammarStore.fetchGrammar();

      const { grammar } = grammarStore;

      expect(grammar.introduction).toBe('문법 인트로덕션입니다.');
      expect(grammar.content).toBe('문장의 형식');
    });
  });
});
