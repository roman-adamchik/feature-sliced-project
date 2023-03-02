import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { type SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType
  isCollapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item: { path, text, Icon }, isCollapsed } = props;
  const { t } = useTranslation();

  return (
    <AppLink
    theme={AppLinkTheme.SECONDARY}
    to={path}
    className={classNames(cls.item, { [cls.collapsed]: isCollapsed })}
  >
    <Icon className={classNames(cls.icon)}/>
    <span className={cls.link}>
    {t(text)}
    </span>
  </AppLink>
  );
});
