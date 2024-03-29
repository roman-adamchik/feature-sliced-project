import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { memo, useMemo } from 'react';
import { Select, type SelectOption } from '@/shared/ui/deprecated/Select';
import { useTranslation } from 'react-i18next';
import { type SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onSortChange: (newSort: ArticleSortField) => void;
  onOrderChange: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className = '', sort, order, onSortChange, onOrderChange } = props;
  const { t } = useTranslation();

  const optionsFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('date'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('title'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('views'),
      },
    ],
    [t],
  );

  const sortOrderOptions = useMemo<Array<SelectOption<SortOrder>>>(
    () => [
      {
        value: 'asc',
        content: t('asc'),
      },
      {
        value: 'desc',
        content: t('desc'),
      },
    ],
    [t],
  );

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <div
          className={classNames(cls.articleSortSelectorRedesign, {}, [
            className,
          ])}
        >
          <VStack gap="8">
            <Text text={t('Sort by...')} />
            <ListBox<ArticleSortField>
              items={optionsFieldOptions}
              value={sort}
              onChange={onSortChange}
            />
            <ListBox<SortOrder>
              items={sortOrderOptions}
              value={order}
              onChange={onOrderChange}
            />
          </VStack>
        </div>
      }
      off={
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
          <Select<ArticleSortField>
            placeholder={t('Sort by')}
            options={optionsFieldOptions}
            value={sort}
            onChange={onSortChange}
          />
          <Select<SortOrder>
            placeholder={t('by')}
            options={sortOrderOptions}
            value={order}
            onChange={onOrderChange}
          />
        </div>
      }
    />
  );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';
