import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, classNames } from 'shared';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className = '' } = props;
  const { t, i18n } = useTranslation();

  const toggleLanguage = async (): Promise<void> => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(cls.languageSwitcher, {}, [className])}
      onClick={toggleLanguage}
      theme={ButtonTheme.CLEAR}
    >
      {t('Language')}
    </Button>
  );
};
