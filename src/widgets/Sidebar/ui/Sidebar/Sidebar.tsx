import { useState, memo } from 'react';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import cls from './Sidebar.module.scss';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import ArrowIcon from '@/shared/assets/icons/redesign_arrow.svg';
import { Button } from '@/shared/ui/redesigned/Button';

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

  const itemList = sidebarItemsList.map((item) => (
    <SidebarItem item={item} key={item.path} isCollapsed={isCollapsed} />
  ));

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
          <AppLogo className={cls.appLogo} size={isCollapsed ? 32 : 72} />
          <VStack className={cls.items} gap="8" role="navigation">
            {itemList}
          </VStack>
          <Button
            data-testid="toggle-button"
            onClick={toggleCollapsed}
            className={cls.collapseBtn}
            variant="clear"
          >
            <ArrowIcon width={18} height={18} />
          </Button>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher
              className={cls.langSwitcher}
              isShort={isCollapsed}
            />
          </div>
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [
            className,
          ])}
        >
          <ButtonDeprecated
            data-testid="toggle-button"
            onClick={toggleCollapsed}
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            size={ButtonSize.L}
            square
          >
            {isCollapsed ? '>' : '<'}
          </ButtonDeprecated>
          <VStack className={cls.items} gap="8" role="navigation">
            {itemList}
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
