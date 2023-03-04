import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface RenderTestComponentOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const renderTestComponent = (
  component: ReactNode,
  options: RenderTestComponentOptions = {},
) => {
  const {
    route = '/',
    initialState,
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>,
    </MemoryRouter>,
  );
};
