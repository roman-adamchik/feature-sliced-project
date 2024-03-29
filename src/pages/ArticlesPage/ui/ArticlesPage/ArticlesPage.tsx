import { memo, useCallback, type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { fetchNextArticleList } from '../../model/services/fetchNextArticlesList/fetchNextArticleList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlePageReducer } from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageGreeting } from '@/features/ArticlesPageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ArticlesViewSelectorContainer } from '../ArticlesViewSelectorContainer/ArticlesViewSelectorContainer';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
  const { className = '' } = props;
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

  const content = (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <StickyContentLayout
          left={<ArticlesViewSelectorContainer />}
          right={<ArticlesPageFilter />}
          content={
            <Page
              className={classNames('', {}, [className])}
              handleScrollEnd={handleLoadNextPart}
              data-testid="ArticlesPage"
            >
              <ArticleInfiniteList className={cls.articleList} />
            </Page>
          }
        />
      }
      off={
        <Page
          className={classNames(cls.articlesPage, {}, [className])}
          handleScrollEnd={handleLoadNextPart}
          data-testid="ArticlesPage"
        >
          <ArticlesPageFilter />
          <ArticleInfiniteList className={cls.articleList} />
          <ArticlesPageGreeting />
        </Page>
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>
  );
});

export default ArticlesPage;
