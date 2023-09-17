import { memo } from 'react';
import { type LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { NavLink } from 'react-router-dom';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  'data-testid'?: string;
  activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className = '',
    children,
    to,
    variant = 'primary',
    'data-testid': dataTestId,
    activeClassName = '',
    ...restProps
  } = props;

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(cls.appLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
        ])
      }
      to={to}
      data-testid={dataTestId}
      {...restProps}
    >
      {children}
    </NavLink>
  );
});
