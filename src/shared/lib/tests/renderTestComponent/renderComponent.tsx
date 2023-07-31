import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { type ReducersMapObject } from '@reduxjs/toolkit';
// eslint-disable-next-line fsd-slivki/path-check-layers
import { ThemeProvider } from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line fsd-slivki/path-check-layers
import '@/app/styles/index.scss';

export interface RenderTestComponentOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: RenderTestComponentOptions;
}

export const TestProvider = (props: TestProviderProps) => {
  const { children, options = {} } = props;
  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = Theme.LIGHT,
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export const renderTestComponent = (
  component: ReactNode,
  options: RenderTestComponentOptions = {},
) => {
  return render(<TestProvider options={options}>{component}</TestProvider>);
};
