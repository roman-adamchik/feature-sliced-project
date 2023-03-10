import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () => Object.values(RouterConfig).filter(
      (route) => !(route.authOnly && !isAuth),
    ), [isAuth],
  );

  return (
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{
                <Suspense fallback={<PageLoader />}>
                  {element}
                </Suspense>
              }</div>}
          />
        ))}
      </Routes>
  );
};

export default memo(AppRouter);
