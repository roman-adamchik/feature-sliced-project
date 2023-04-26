import { type StateSchema } from '@/app/providers/StoreProvider';
import { ArticleListViewType } from '@/entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from './articlesPageSelectors';

describe('getArticlesPageIsLoading', () => {
  it('should return false if isLoading is not defined in state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
  });

  it('should return the value of isLoading in state', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
  });
});

describe('getArticlesPageError', () => {
  it('should return undefined if error is not defined in state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageError(state as StateSchema)).toBeUndefined();
  });

  it('should return the value of error in state', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: 'Page not found',
      },
    };
    expect(getArticlesPageError(state as StateSchema)).toEqual('Page not found');
  });
});

describe('getArticlesPageView', () => {
  it('should return TABLE if view is not defined in state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleListViewType.TABLE);
  });

  it('should return the value of view in state', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: ArticleListViewType.LIST,
      },
    };
    expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleListViewType.LIST);
  });
});
