import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo, useCallback } from 'react';
import { ArticleBlockType, ArticleListViewType, type ArticleTextBlock, type Article } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';

interface ArticleListItemProps {
  className?: string
  article?: Article
  view?: ArticleListViewType
  isLoading?: boolean
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className = '',
    article,
    view = ArticleListViewType.TABLE,
    isLoading,
  } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOpenArticle = useCallback(() => {
    if (article) {
      navigate(`${RoutePath.article_details}${article.id}`);
    }
  }, [navigate, article]);

  if (isLoading || !article) {
    return <ArticleListItemSkeleton className={className} view={view}/>;
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
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && (
              <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <Button onClick={handleOpenArticle} theme={ButtonTheme.OUTLINE}>
                {t('Read more...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      <Card className={cls.card} onClick={handleOpenArticle}>
        <div className={cls.imageWrapper}>
          <img
            src={article.img}
            alt={article.title}
            className={cls.img}
          />
          <Text
            text={article.createdAt}
            className={cls.date}
          />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text
            text={article.title}
            className={cls.title}
        />
      </Card>
    </div>
  );
});

ArticleListItem.displayName = 'ArticleListItem';
