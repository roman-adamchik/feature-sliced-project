import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './AvatarDropdown.module.scss';
import { memo, useCallback } from 'react';
import { Dropdown } from '@/shared/ui/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { RoutePath } from '@/shared/const/router';

interface AvatarDropdownProps {
  className?: string
  setIsModalOpen: (value: boolean) => void
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const {
    className = '',
    setIsModalOpen,
  } = props;
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

  return (
    <Dropdown
      items={[
        ...(isAdminPanelAvailable
          ? [{
              key: 'adminPage',
              content: t('Admin'),
              href: RoutePath.admin_panel,
            }]
          : []),
        {
          key: 'profile',
          content: t('Profile'),
          href: `${RoutePath.profile}${userAuthData.id}`,
        },
        {
          key: 'logout',
          content: t('Logout'),
          onClick: handleLogoutClick,
        },
      ]}
      triggerElement={<Avatar src={userAuthData.avatar} alt="avatar" size={30}/>}
      className={classNames(cls.avatarDropdown, {}, [className])}
      direction='bottom left'
    />
  );
});

AvatarDropdown.displayName = 'AvatarDropdown';
