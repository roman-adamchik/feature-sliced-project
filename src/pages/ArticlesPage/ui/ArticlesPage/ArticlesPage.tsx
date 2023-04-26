import { memo, useCallback, type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page/Page';
import { fetchNextArticleList } from '../../model/services/fetchNextArticlesList/fetchNextArticleList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlePageReducer } from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
  const {
    className = '',
  } = props;
  const dispatch = useAppDispatch();
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
        <ArticlesPageFilter />
        <ArticleInfiniteList className={cls.articleList}/>
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
