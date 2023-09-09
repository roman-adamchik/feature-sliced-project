import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { type FC, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInitialized, initAuthData } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Theme } from '@/shared/const/theme';
import { PageLoader } from '@/widgets/PageLoader';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isUserInitialized = useSelector(getUserInitialized);

  useEffect(() => {
    void dispatch(initAuthData());
  }, [dispatch]);

  if (!isUserInitialized) {
    return <PageLoader />;
  }

  return (
    <div className={`app ${theme || Theme.LIGHT}`}>
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
