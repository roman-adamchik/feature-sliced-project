import { t } from 'i18next';
import { useCallback, useState, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsAuthModalOpen(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
      className={classNames(cls.button)}
      onClick={handleToggleModal}
      theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Login')}
      </Button>
      <Modal
          isOpen={isAuthModalOpen}
          onClose={handleToggleModal}
      >
        { /* eslint-disable */ }
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptatem quos cupiditate quod sequi! Libero voluptas qui sapiente velit provident.
        { /* eslint-enable */ }
      </Modal>
    </div>
  );
};
