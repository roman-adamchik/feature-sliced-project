import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { memo } from 'react';
import GridIconDeprecated from '@/shared/assets/icons/grid.svg';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import ListIcon from '@/shared/assets/icons/redesign_list.svg';
import GridIcon from '@/shared/assets/icons/redesign_grid.svg';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { ArticleListViewType } from '@/entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleListViewType;
  handleViewClick?: (type: ArticleListViewType) => void;
}

const viewTypes = [
  {
    view: ArticleListViewType.LIST,
    icon: toggleFeatures({
      feature: 'isNewDesign',
      on: () => <ListIcon width={32} height={32} />,
      off: () => <ListIconDeprecated />,
    }),
  },
  {
    view: ArticleListViewType.TABLE,
    icon: toggleFeatures({
      feature: 'isNewDesign',
      on: () => <GridIcon width={32} height={32} />,
      off: () => <GridIconDeprecated />,
    }),
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className = '', view, handleViewClick } = props;

  const handleClick = (newType: ArticleListViewType) => () => {
    handleViewClick?.(newType);
  };

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <Card
          className={classNames(cls.articleViewSelectorRedesign, {}, [
            className,
          ])}
          border="rounded"
        >
          <HStack align="center">
            {viewTypes.map((viewType) => (
              <Button
                key={viewType.view}
                onClick={handleClick(viewType.view)}
                className={classNames(cls.button, {
                  [cls.selected]: viewType.view === view,
                })}
                variant={ButtonTheme.CLEAR}
              >
                {viewType.icon}
              </Button>
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              onClick={handleClick(viewType.view)}
              className={classNames('', {
                [cls.selected]: viewType.view === view,
              })}
              theme={ButtonTheme.CLEAR}
            >
              {viewType.icon}
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
});

ArticleViewSelector.displayName = 'ArticleViewSelector';
