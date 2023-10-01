import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { type Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { useTranslation } from 'react-i18next';
import { ArticleListViewType } from '../../model/consts/consts';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleListViewType;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className = '',
    articles,
    view = ArticleListViewType.TABLE,
    isLoading,
    target,
  } = props;
  const { t } = useTranslation();

  if (!articles) {
    return null;
  }

  const getSkeletons = () =>
    new Array(view === ArticleListViewType.TABLE ? 9 : 3)
      .fill(0)
      .map((_, i) => <ArticleListItem key={i} view={view} isLoading />);

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <ToggleFeatures
          feature="isNewDesign"
          on={
            <TextDeprecated text={t('No articles found')} size={TextSize.L} />
          }
          off={<Text text={t('No articles found')} size="l" />}
        />
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <HStack
          wrap="wrap"
          gap="16"
          className={classNames('', {}, [])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeletons()}
        </HStack>
      }
      off={
        <div
          className={classNames(cls.articleList, {}, [className, cls[view]])}
          data-testid="ArticleList"
        >
          {articles.map((article) => (
            <ArticleListItem
              article={article}
              className={cls.card}
              isLoading={isLoading}
              key={article.id}
              view={view}
              target={target}
            />
          ))}
          {isLoading && getSkeletons()}
        </div>
      }
    />
  );
});

ArticleList.displayName = 'ArticleList';
