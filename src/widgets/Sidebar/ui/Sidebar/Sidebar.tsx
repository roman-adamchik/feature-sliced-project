import { useState, memo } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className = '' } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const toggleCollapsed = (): void => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="toggle-button"
        onClick={toggleCollapsed}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {sidebarItemsList.map((item) =>
          <SidebarItem
            item={item}
            key={item.path}
            isCollapsed={isCollapsed}
          />,
        )}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.langSwitcher} isShort={isCollapsed} />
      </div>
    </div>
  );
});
