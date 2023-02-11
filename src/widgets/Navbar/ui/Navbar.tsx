import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme, classNames } from 'shared';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.Links)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={classNames(cls.MainLink)}
        >
          {t('Main')}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/about"
          className={classNames(cls.MainLink)}
        >
          {t('About')}
        </AppLink>
      </div>
    </div>
  );
};
