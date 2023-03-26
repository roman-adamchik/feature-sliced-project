import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type AppRoutesProps, RouterConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>);

    return <Route
      key={route.path}
      path={route.path}
      element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
    />;
  }, []);

  return (
      <Routes>
        {Object.values(RouterConfig).map(renderWithWrapper)}
      </Routes>
  );
};

export default memo(AppRouter);
