import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticleListItem.module.scss';
import { memo } from 'react';
import { Text } from '@/shared/ui/deprecated/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/deprecated/AppLink';

import { getRouteArticleDetails } from '@/shared/const/router';
import { Image } from '@/shared/ui/redesigned/Image';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleListItemProps } from '../ArticleListItem';
import {
  ArticleBlockType,
  ArticleListViewType,
} from '../../../model/consts/consts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
  const {
    className = '',
    article,
    view = ArticleListViewType.TABLE,
    isLoading,
    target,
  } = props;
  const { t } = useTranslation();

  if (isLoading || !article) {
    return <ArticleListItemSkeleton className={className} view={view} />;
  }

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <EyeIcon className={cls.eyeIcon} />
    </>
  );

  if (view === ArticleListViewType.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames('', {}, [className, cls[view]])}
        data-testid="ArticleListItem"
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <Image
            src={article.img}
            className={cls.img}
            alt={article.title}
            fallback={<Skeleton width={'100%'} height={200} />}
            errorFallback={<Skeleton width={'100%'} height={200} isNoImage />}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
              <Button theme={ButtonTheme.OUTLINE}>{t('Read more...')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      to={getRouteArticleDetails(article.id)}
      target={target}
      className={classNames('', {}, [className, cls[view]])}
      data-testid="ArticleListItem"
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Image
            src={article.img}
            alt={article.title}
            className={cls.img}
            fallback={<Skeleton width={200} height={200} />}
            errorFallback={<Skeleton width={200} height={200} isNoImage />}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});

ArticleListItemDeprecated.displayName = 'ArticleListItem';
