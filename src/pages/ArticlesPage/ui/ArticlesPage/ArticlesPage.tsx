import { ArticleList } from 'entities/Article';
import { useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticleList } from '../../model/services/fetchNextArticlesList/fetchNextArticleList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {
    className = '',
  } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams));
  });

  const handleLoadNextPart = useCallback(() => {
    if (GLOBAL_PROJECT !== 'storybook') {
      void dispatch(fetchNextArticleList());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        className={classNames(cls.articlesPage, {}, [className])}
        handleScrollEnd={handleLoadNextPart}
      >
        {error
          ? <Text text={t('Error loading article list')}/>
          : (
            <>
              <ArticlesPageFilter />
              <ArticleList
                view={view}
                articles={articles}
                isLoading={isLoading}
                className={cls.articleList}
              />
            </>
            )}
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
