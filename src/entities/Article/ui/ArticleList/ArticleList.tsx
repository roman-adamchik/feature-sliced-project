import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { memo } from 'react';
import { ArticleListViewType, type Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

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
