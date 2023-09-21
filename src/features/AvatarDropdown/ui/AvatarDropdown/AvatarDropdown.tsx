import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './AvatarDropdown.module.scss';
import { memo, useCallback } from 'react';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
  className?: string;
  setIsModalOpen: (value: boolean) => void;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className = '', setIsModalOpen } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const userAuthData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const handleLogoutClick = useCallback(() => {
    setIsModalOpen(false);
    dispatch(userActions.logout());
  }, [dispatch, setIsModalOpen]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!userAuthData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            key: 'adminPage',
            content: t('Admin'),
            href: getRouteAdminPanel(),
          },
        ]
      : []),
    {
      key: 'profile',
      content: t('Profile'),
      href: userAuthData?.id ? getRouteProfile(userAuthData.id) : '/',
    },
    {
      key: 'logout',
      content: t('Logout'),
      onClick: handleLogoutClick,
    },
  ];

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <Dropdown
          items={items}
          triggerElement={
            <Avatar src={userAuthData.avatar} alt="avatar" size={40} />
          }
          className={classNames(cls.avatarDropdown, {}, [className])}
          direction="bottom left"
        />
      }
      off={
        <DropdownDeprecated
          items={items}
          triggerElement={
            <AvatarDeprecated
              src={userAuthData.avatar}
              alt="avatar"
              size={30}
            />
          }
          className={classNames(cls.avatarDropdown, {}, [className])}
          direction="bottom left"
        />
      }
    />
  );
});

AvatarDropdown.displayName = 'AvatarDropdown';
