import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';
import { RouterConfig } from '../config/routerConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>);

    return <Route
      key={route.path}
      path={route.path}
      element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
    />;
  }, []);

  return (
      <Routes>
        {Object.values(RouterConfig).map(renderWithWrapper)}
      </Routes>
  );
};

export default memo(AppRouter);
