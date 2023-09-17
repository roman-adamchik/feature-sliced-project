import { useState, memo } from 'react';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className = '' } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const toggleCollapsed = (): void => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.sidebarRedesigned,
            { [cls.collapsed]: isCollapsed },
            [className],
          )}
        >
          <AppLogo className={cls.appLogo} />
        </aside>
      }
      off={
        <aside
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
          <VStack className={cls.items} gap="8" role="navigation">
            {sidebarItemsList.map((item) => (
              <SidebarItem
                item={item}
                key={item.path}
                isCollapsed={isCollapsed}
              />
            ))}
          </VStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher
              className={cls.langSwitcher}
              isShort={isCollapsed}
            />
          </div>
        </aside>
      }
    />
  );
});

Sidebar.displayName = 'Sidebar';
