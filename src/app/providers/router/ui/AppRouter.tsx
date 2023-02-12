import { type FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter: FC = () => {
  return (
      <Routes>
        {Object.values(RouterConfig).map(({ path, element }) => (
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

export default AppRouter;
