import { type Article } from 'entities/Article';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from './fetchArticlesList';

const articlesData: DeepPartial<Article[]> = [
  {
    id: '1',
    title: 'Some test article',
  },
  {
    id: '2',
    title: 'Some test article x2',
  },
];

describe('fetchArticlesList.test', () => {
  test('Successfull fetch articles', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchArticlesList);

    testAsyncThunk.api.get.mockReturnValue(Promise.resolve(
      {
        data: articlesData,
      },
    ));
    const result = await testAsyncThunk.callThunk(undefined);

    expect(testAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articlesData);
  });

  test('Failed fetch article', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchArticlesList);
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve(
      {
        status: 403,
      },
    ));
    const result = await testAsyncThunk.callThunk(undefined);

    expect(testAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
