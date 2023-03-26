import { fetchArticlesList } from './../fetchArticlesList/fetchArticlesList';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticleList } from './fetchNextArticleList';

jest.mock('./../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticleList.test', () => {
  test('Successfull fetch next article list', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchNextArticleList, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await testAsyncThunk.callThunk();

    expect(testAsyncThunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ page: 3 });
  });

  test('No more data to fetch', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchNextArticleList, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await testAsyncThunk.callThunk();

    expect(testAsyncThunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('no fetch data while loading', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchNextArticleList, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await testAsyncThunk.callThunk();

    expect(testAsyncThunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
