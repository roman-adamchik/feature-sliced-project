import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { memo } from 'react';
import GridIcon from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ArticleListViewType } from '@/entities/Article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleListViewType;
  handleViewClick?: (type: ArticleListViewType) => void;
}

const viewTypes = [
  {
    view: ArticleListViewType.LIST,
    icon: <ListIcon />,
  },
  {
    view: ArticleListViewType.TABLE,
    icon: <GridIcon />,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className = '', view, handleViewClick } = props;

  const handleClick = (newType: ArticleListViewType) => () => {
    handleViewClick?.(newType);
  };

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          onClick={handleClick(viewType.view)}
          className={classNames('', { [cls.selected]: viewType.view === view })}
          theme={ButtonTheme.CLEAR}
        >
          {viewType.icon}
        </Button>
      ))}
    </div>
  );
});

ArticleViewSelector.displayName = 'ArticleViewSelector';
