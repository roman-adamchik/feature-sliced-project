import { Currency } from '../../model/types/currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { ListBox } from '@/shared/ui/deprecated/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  readonly?: boolean;
  onChange?: (value: Currency) => void;
}

const currencyOptions = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.ILS, content: Currency.ILS },
  { value: Currency.BYN, content: Currency.BYN },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
  const { className = '', value, readonly, onChange } = props;
  const { t } = useTranslation();

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <ListBox
      onChange={handleChange}
      className={classNames('', {}, [className])}
      items={currencyOptions}
      value={value}
      defaultValue={t('Select currency')}
      label={t('Select currency')}
      readonly={readonly}
      direction="top right"
    />
  );
};
