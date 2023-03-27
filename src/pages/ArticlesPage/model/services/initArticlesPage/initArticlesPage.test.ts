import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from './../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('./../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
  test('Successfull initialize reducer', async () => {
    const testAsyncThunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _initialized: false,
      },
    });

    await testAsyncThunk.callThunk();

    expect(testAsyncThunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ page: 1 });
  });

  test('Already initialized reducer', async () => {
    const testAsyncThunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        _initialized: true,
      },
    });

    await testAsyncThunk.callThunk();

    expect(testAsyncThunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
