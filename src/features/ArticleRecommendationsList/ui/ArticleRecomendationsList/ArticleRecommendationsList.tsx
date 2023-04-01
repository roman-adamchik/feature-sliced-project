import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleRecommendationsList.module.scss';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { articleRecommendationsListReducer, getArticlesrecommendations } from '../../model/slices/articleRecommendationsListSlice';
import { getArticleRecommendationsListLoading } from 'features/ArticleRecommendationsList/model/selectors/ArticleRecommendationsListSelectors';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleRecommendations } from 'features/ArticleRecommendationsList/model/services/fetchArticleRecommendations';

interface ArticleRecommendationsListProps {
  className?: string
}

const reducers: ReducersList = {
  articleRecommendationsList: articleRecommendationsListReducer,
};

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const {
    className = '',
  } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const recommendations = useSelector(getArticlesrecommendations.selectAll);
  const isLoading = useSelector(getArticleRecommendationsListLoading);

  useInitialEffect(() => {
    void dispatch(fetchArticleRecommendations());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('Recommended')}
        />
        <ArticleList
            articles={recommendations}
            isLoading={isLoading}
            className={cls.recommendations}
            target="_blank"
        />
      </div>
    </DynamicModuleLoader>
  );
});

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
