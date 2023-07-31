import { getUserAuthData, getUserRoles, type UserRole } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  roles?: UserRole[];
  children: JSX.Element;
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children, roles } = props;
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) return true;

    return roles.some((role) => userRoles.includes(role));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
    );
  }

  return children;
};
