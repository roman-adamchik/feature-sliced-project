import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
}
