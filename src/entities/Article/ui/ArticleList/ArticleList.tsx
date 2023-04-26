import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type HTMLAttributeAnchorTarget, memo, type ReactNode } from 'react';
import { type Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, WindowScroller, type ListRowProps } from 'react-virtualized';
import { ArticleListViewType } from '../../model/consts/consts';

interface ArticleListProps {
  className?: string
  articles?: Article[]
  isLoading?: boolean
  view?: ArticleListViewType
  target?: HTMLAttributeAnchorTarget
  virtualized?: boolean
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className = '',
    articles,
    view = ArticleListViewType.TABLE,
    isLoading,
    target,
    virtualized = true,
  } = props;
  const { t } = useTranslation();

  if (!articles) {
    return null;
  }

  const isListView = view === ArticleListViewType.LIST;
  const itemsPerRow = isListView ? 1 : 3;
  const rowCount = isListView ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const getSkeletons = () => new Array(view === ArticleListViewType.TABLE ? 9 : 3)
    .fill(0)
    .map((_, i) => (
      <ArticleListItem
        key={i}
        view={view}
        isLoading
      />
    ));

  const renderRow = (props: ListRowProps): ReactNode => {
    const { key, index, style } = props;
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          target={target}
          key={articles[i].id}
          className={cls.card}
        />,
      );
    }

    return (
      <div key={key} className={cls.row} style={style}>
        {items}
      </div>
    );
  };

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
      // @ts-expect-error deprecated library need to replace in future
      <WindowScroller
        scrollElement={document.getElementById('page') ?? window}
      >
        {({
          height,
          width,
          registerChild,
          isScrolling,
          onChildScroll,
          scrollTop,
        }) => (
          <div
            // @ts-expect-error deprecated library need to replace in future
            ref={registerChild}
            className={classNames(cls.articleList, {}, [className, cls[view]])}
          >
            {virtualized
              ? (
              // @ts-expect-error deprecated library need to replace in future
              <List
                autoHeight
                autoWidth={isListView}
                height={height ?? 680}
                rowCount={isListView ? articles.length : rowCount}
                rowHeight={isListView ? 680 : 330}
                rowRenderer={renderRow}
                width={width}
                isScrolling={isScrolling}
                scrollTop={scrollTop}
                onScroll={onChildScroll}
              />
                )
              : (
                  articles.map(article => (
                    <ArticleListItem
                      article={article}
                      className={cls.card}
                      isLoading={isLoading}
                      key={article.id}
                      view={view}
                      target={target}
                    />
                  ))
                )
            }
            {isLoading && getSkeletons()}
          </div>
        )}
      </WindowScroller>
  );
});

ArticleList.displayName = 'ArticleList';
