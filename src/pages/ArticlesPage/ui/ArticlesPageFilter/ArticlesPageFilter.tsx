import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilter.module.scss';
import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticlesViewSelectorContainer } from '../ArticlesViewSelectorContainer/ArticlesViewSelectorContainer';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import SearchIcon from '@/shared/assets/icons/redesign_search.svg';

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const {
    sort,
    order,
    handleSortChange,
    handleOrderChange,
    search,
    handleSearchChange,
    type,
    handleTypeChange,
  } = useArticleFilters();

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <Card
          className={classNames(cls.articlesPageFilterRedesign, {}, [
            className,
          ])}
          padding={'24'}
        >
          <VStack gap="16">
            <Input
              placeholder={t('Search')}
              value={search}
              onChange={handleSearchChange}
              size="s"
              addonLeft={
                <SearchIcon width={32} height={32} className={cls.searchIcon} />
              }
            />
            <ArticleTypeTabs
              type={type}
              handleTypeChange={handleTypeChange}
              className={cls.tabs}
            />
            <ArticleSortSelector
              sort={sort}
              order={order}
              onSortChange={handleSortChange}
              onOrderChange={handleOrderChange}
            />
          </VStack>
        </Card>
      }
      off={
        <div className={classNames(cls.articlesPageFilter, {}, [className])}>
          <div className={cls.sortWrapper}>
            <ArticleSortSelector
              sort={sort}
              order={order}
              onSortChange={handleSortChange}
              onOrderChange={handleOrderChange}
            />
            <ArticlesViewSelectorContainer />
          </div>
          <CardDeprecated className={cls.search}>
            <InputDeprecated
              placeholder={t('Search')}
              value={search}
              onChange={handleSearchChange}
            />
          </CardDeprecated>
          <ArticleTypeTabs
            type={type}
            handleTypeChange={handleTypeChange}
            className={cls.tabs}
          />
        </div>
      }
    />
  );
});

ArticlesPageFilter.displayName = 'ArticlesPageFilter';
