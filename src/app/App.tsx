import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
