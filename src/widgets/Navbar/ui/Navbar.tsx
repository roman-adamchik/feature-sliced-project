import { getUserAuthData } from '@/entities/User';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import cls from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUserName';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getRouteArticleCreate } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className = '' } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const userAuthData = useSelector(getUserAuthData);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  if (userAuthData) {
    return (
      <ToggleFeatures
        feature="isNewDesign"
        on={
          <header className={classNames(cls.navbarRedesigned, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown setIsModalOpen={setIsModalOpen} />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(cls.navbar, {}, [className])}>
            <Text
              className={cls.appName}
              title={t('Techno blog app')}
              theme={TextTheme.INVERTED}
            />
            <AppLink
              to={getRouteArticleCreate()}
              theme={AppLinkTheme.SECONDARY}
            >
              {t('Create new article')}
            </AppLink>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown setIsModalOpen={setIsModalOpen} />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        className={classNames(cls.button)}
        onClick={handleModalOpen}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Login')}
      </Button>
      <LoginModal isOpen={isModalOpen} onClose={handleModalClose} />
    </header>
  );
});

Navbar.displayName = 'Navbar';
