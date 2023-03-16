import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { type FC, Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInitialized, userActions } from 'entities/User';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isUserInitialized = useSelector(getUserInitialized);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isUserInitialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
