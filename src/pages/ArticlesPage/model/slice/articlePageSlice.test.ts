import { ArticleListViewType } from 'entities/Article';
import { articlePageActions, articlePageReducer } from './articlePageSlice';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { type ArticlePageSchema } from '../types/articlePageSchema';

describe('articlePageSlice.test', () => {
  test('setView action testing', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      view: ArticleListViewType.LIST,
    };
    expect(
      articlePageReducer(state as ArticlePageSchema, articlePageActions.setView(ArticleListViewType.TABLE)),
    ).toEqual({
      view: ArticleListViewType.TABLE,
    });
  });

  // test('fetchArticles pending', () => {
  //   const state: DeepPartial<ArticlePageSchema> = {
  //     error: 'error',
  //     isLoading: false,
  //   };
  //   expect(articlePageReducer(state as ArticlePageSchema, fetchArticlesList.pending))
  //     .toEqual({
  //       error: undefined,
  //       isLoading: true,
  //     });
  // });

  test('fetchArticles rejected', () => {
    const state: DeepPartial<ArticlePageSchema> = {
    };
    expect(articlePageReducer(state as ArticlePageSchema, fetchArticlesList.rejected))
      .toEqual({
        isLoading: false,
      });
  });
});
