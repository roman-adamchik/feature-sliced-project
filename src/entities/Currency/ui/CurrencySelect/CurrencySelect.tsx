import { Currency } from '../../model/types/currency';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  readonly?: boolean
  onChange?: (value: Currency) => void
}

const currencyOptions = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.ILS, content: Currency.ILS },
  { value: Currency.BYN, content: Currency.BYN },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
  const {
    className = '',
    value,
    readonly,
    onChange,
  } = props;
  const { t } = useTranslation();

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select className={classNames('', {}, [className])}
      options={currencyOptions}
      value={value}
      placeholder={t('Select currency')}
      readOnly={readonly}
      onChange={handleChange}
    />
  );
};
