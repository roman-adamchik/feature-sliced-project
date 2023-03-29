import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { memo } from 'react';
import { ArticleListViewType, type Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ArticleListProps {
  className?: string
  articles?: Article[]
  isLoading?: boolean
  view?: ArticleListViewType
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className = '',
    articles,
    view = ArticleListViewType.TABLE,
    isLoading,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      key={article.id}
      view={view}
    />
  );

  const getSkeletons = () => new Array(view === ArticleListViewType.TABLE ? 9 : 3)
    .fill(0)
    .map((_, i) => (
      <ArticleListItem
        key={i}
        view={view}
        isLoading
      />
    ));

  if (!articles) {
    return null;
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text
          text={t('No articles found')}
          size={TextSize.L}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length
        ? (
            articles.map(renderArticle)
          )
        : null
      }
      {
        isLoading && getSkeletons()
      }
    </div>
  );
});

ArticleList.displayName = 'ArticleList';
