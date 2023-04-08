import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';

describe('articleDetailsSlice.test', () => {
  test('fetchArticleById pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      error: 'error',
      isLoading: false,
    };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending))
      .toEqual({
        error: undefined,
        isLoading: true,
      });
  });

  test('fetchArticleById rejected', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      data: undefined,
    };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.rejected))
      .toEqual({
        isLoading: false,
      });
  });
});
