import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import cls from './SidebarItem.module.scss';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { type SidebarItemType } from '../../model/types/sidebar';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
interface SidebarItemProps {
  item: SidebarItemType;
  isCollapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const {
    item: { path, text, Icon, authOnly },
    isCollapsed,
  } = props;
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && authOnly) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <AppLink
          variant="primary"
          to={path}
          className={classNames(cls.itemRedesign, {
            [cls.collapsed]: isCollapsed,
          })}
          activeClassName={cls.active}
        >
          <Icon className={classNames(cls.icon)} width={32} height={32} />
          <span className={cls.link}>{text}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          theme={AppLinkTheme.SECONDARY}
          to={path}
          className={classNames(cls.item, { [cls.collapsed]: isCollapsed })}
        >
          <Icon className={classNames(cls.icon)} />
          <span className={cls.link}>{text}</span>
        </AppLinkDeprecated>
      }
    />
  );
});

SidebarItem.displayName = 'SidebarItem';
