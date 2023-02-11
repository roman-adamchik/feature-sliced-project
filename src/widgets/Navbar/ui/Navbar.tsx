import { type FC } from 'react';
import { AppLink, AppLinkTheme, classNames } from 'shared';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.Links)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={classNames(cls.MainLink)}
        >
          Main
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/about"
          className={classNames(cls.MainLink)}
        >
          About
        </AppLink>
      </div>
    </div>
  );
};
