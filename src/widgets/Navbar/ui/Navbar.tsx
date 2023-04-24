import { getUserAuthData } from 'entities/User';
import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { LoginModal } from 'features/AuthByUserName';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropdown } from 'features/AvatarDropdown';

interface NavbarProps {
  className?: string
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
      <header className={classNames(cls.navbar, {}, [className])}>
      <Text
        className={cls.appName}
        title={t('Techno blog app')}
        theme={TextTheme.INVERTED}
      />
      <AppLink
        to={RoutePath.article_create}
        theme={AppLinkTheme.SECONDARY}
      >
        {t('Create new article')}
      </AppLink>
      <HStack gap='16' className={cls.actions}>
        <NotificationButton />
        <AvatarDropdown setIsModalOpen={setIsModalOpen}/>
      </HStack>
    </header>
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
      <LoginModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </header>
  );
});

Navbar.displayName = 'Navbar';
