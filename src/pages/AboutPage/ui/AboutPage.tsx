import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
  const { t } = useTranslation();

  return <div>{t('About page')}</div>;
});

export default AboutPage;
