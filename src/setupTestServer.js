import testServer from './util/testServer';

beforeAll(() => {
  testServer.listen();
});

afterEach(() => {
  testServer.resetHandlers();
});

afterAll(() => {
  testServer.close();
});
