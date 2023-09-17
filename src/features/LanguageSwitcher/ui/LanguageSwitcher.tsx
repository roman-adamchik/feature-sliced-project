import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import cls from './LanguageSwitcher.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LanguageSwitcherProps {
  className?: string;
  isShort?: boolean;
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
  const { className = '', isShort = false } = props;
  const { t, i18n } = useTranslation();

  const toggleLanguage = async (): Promise<void> => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <Button
          className={classNames(cls.languageSwitcher, {}, [className])}
          onClick={toggleLanguage}
          variant="clear"
        >
          {isShort ? t('Language short') : t('Language')}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames(cls.languageSwitcher, {}, [className])}
          onClick={toggleLanguage}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {isShort ? t('Language short') : t('Language')}
        </ButtonDeprecated>
      }
    />
  );
});
