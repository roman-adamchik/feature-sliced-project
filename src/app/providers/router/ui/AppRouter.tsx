import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared/config/routerConfig/routerConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RouterConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
