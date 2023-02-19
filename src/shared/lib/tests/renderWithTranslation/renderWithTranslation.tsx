import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import i18nForTests from 'shared/config/i18n/i18nForTests';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const renderWithTranslation = (component: ReactNode) => {
  return render(
    <I18nextProvider i18n={i18nForTests}>
      {component}
    </I18nextProvider>,
  );
};
