import { type FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared';

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RouterConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
