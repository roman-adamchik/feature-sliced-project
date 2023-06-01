import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string
  isShort?: boolean
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
  const { className = '', isShort = false } = props;
  const { t, i18n } = useTranslation();

  const toggleLanguage = async (): Promise<void> => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(cls.languageSwitcher, {}, [className])}
      onClick={toggleLanguage}
      theme={ButtonTheme.CLEAR_INVERTED}
    >
      {isShort ? t('Language short') : t('Language')}
    </Button>
  );
});
