import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { type TabItem, Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  type: ArticleType;
  handleTypeChange: (tab: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className = '', type, handleTypeChange } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<Array<TabItem<ArticleType>>>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('All'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Economics'),
      },
      {
        value: ArticleType.IT,
        content: t('IT'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Science'),
      },
    ],
    [t],
  );

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <Tabs
          className={classNames('', {}, [className])}
          tabs={typeTabs}
          value={type}
          onTabClick={handleTypeChange}
          direction="column"
        />
      }
      off={
        <TabsDeprecated
          className={classNames('', {}, [className])}
          tabs={typeTabs}
          value={type}
          onTabClick={handleTypeChange}
        />
      }
    />
  );
});

ArticleTypeTabs.displayName = 'ArticleTypeTabs';
