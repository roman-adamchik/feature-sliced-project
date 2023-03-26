import { ArticleList, type ArticleListViewType, ArticleViewSelector } from 'entities/Article';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import { useCallback, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ArticlesPage.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

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

  useInitialEffect(() => {
    void dispatch(fetchArticlesList());
    void dispatch(articlePageActions.initState());
  });

  const handleViewClick = useCallback((view: ArticleListViewType) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articlesPage, {}, [className])}>
        {error
          ? <Text text={t('Error loading article list')}/>
          : (
            <>
              <ArticleViewSelector
                view={view}
                handleViewClick={handleViewClick}
              />
              <ArticleList
                view={view}
                articles={articles}
                isLoading={isLoading}
              />
            </>
            )}
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
