import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleRecommendationsList.module.scss';
import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/recomendationsListApi';
import { VStack } from '@/shared/ui/Stack';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();

    const { isLoading, data: recommendations } =
      useArticleRecommendationsList(3);

    return (
      <VStack
        gap="8"
        className={classNames('', {}, [className])}
        data-testid="ArticleRecommendationsList.wrapper"
      >
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
      </VStack>
    );
  },
);

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
