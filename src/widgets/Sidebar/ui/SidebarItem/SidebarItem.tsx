import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './SidebarItem.module.scss';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { type SidebarItemType } from '../../model/types/sidebar';
interface SidebarItemProps {
  item: SidebarItemType
  isCollapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item: { path, text, Icon, authOnly }, isCollapsed } = props;
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && authOnly) {
    return null;
  }

  return (
    <AppLink
    theme={AppLinkTheme.SECONDARY}
    to={path}
    className={classNames(cls.item, { [cls.collapsed]: isCollapsed })}
  >
    <Icon className={classNames(cls.icon)}/>
    <span className={cls.link}>
      {text}
    </span>
  </AppLink>
  );
});

SidebarItem.displayName = 'SidebarItem';
