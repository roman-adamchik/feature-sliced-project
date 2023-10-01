import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo } from 'react';
import EyeIcon from '@/shared/assets/icons/redesign_eye.svg';
import { useTranslation } from 'react-i18next';

import { getRouteArticleDetails } from '@/shared/const/router';
import { Image } from '@/shared/ui/redesigned/Image';
import { ArticleListItemProps } from '../ArticleListItem';
import {
  ArticleBlockType,
  ArticleListViewType,
} from '../../../model/consts/consts';
import { ArticleTextBlock } from '../../../model/types/article';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { className, article, view, target, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading || !article) {
    return <ArticleListItemSkeleton className={className} view={view} />;
  }

  const types = <Text text={article.type.join(', ')} />;
  const views = (
    <HStack gap="8">
      <EyeIcon width={32} height={32} />
      <Text text={String(article.views)} />
    </HStack>
  );

  if (view === ArticleListViewType.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card
        padding="24"
        max
        data-testid="ArticleListItem"
        className={classNames('', {}, [className, cls[view]])}
      >
        <VStack maxWidth gap="16">
          <HStack gap="8" maxWidth>
            <Avatar size={32} src={article.user.avatar} />
            <Text bold text={article.user.username} />
            <Text text={article.createdAt} />
          </HStack>
          <Text title={article.title} bold />
          <Text title={article.subtitle} size="s" />
          <Image
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock?.paragraphs && (
            <Text
              className={cls.textBlock}
              text={textBlock.paragraphs.slice(0, 2).join(' ')}
            />
          )}
          <HStack maxWidth justify="between">
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              <Button variant="outline">{t('Read more...')}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames('', {}, [className, cls[view]])}
    >
      <Card className={cls.card} border={'rounded'}>
        <Image
          fallback={<Skeleton width={200} height={200} />}
          alt={article.title}
          src={article.img}
          className={cls.img}
        />
        <VStack className={cls.info} gap="4">
          <Text title={article.title} />
          <VStack gap="4" className={cls.footer} maxWidth>
            <HStack justify="between" maxWidth>
              <Text text={article.createdAt} />
              {views}
            </HStack>
            <HStack gap="4">{types}</HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
});

ArticleListItemRedesigned.displayName = 'ArticleListItem';
