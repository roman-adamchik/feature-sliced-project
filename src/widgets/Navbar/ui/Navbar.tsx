import { getUserAuthData, userActions } from 'entities/User';
import { useCallback, useState, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { LoginModal } from 'features/AuthByUserName';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleLogoutClick = useCallback(() => {
    setIsModalOpen(false);
    dispatch(userActions.logout());
  }, [dispatch]);

  if (userAuthData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        className={classNames(cls.button)}
        onClick={handleLogoutClick}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Logout')}
      </Button>
    </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
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
    </div>
  );
};
