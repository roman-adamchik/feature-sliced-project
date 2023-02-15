import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    keySeparator: false,
    debug: GLOBAL_IS_DEV,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
