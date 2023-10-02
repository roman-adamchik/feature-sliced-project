import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { type FC, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInitialized, initAuthData } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

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
    <ToggleFeatures
      feature="isNewDesign"
      off={
        <div className={classNames('app', {}, [theme])} id="app">
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div className={classNames('app_redesigned', {}, [theme])} id="app">
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
            />
          </Suspense>
        </div>
      }
    />
  );
};
