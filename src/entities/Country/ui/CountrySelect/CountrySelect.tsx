import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string
  value?: Country
  readonly?: boolean
  onChange?: (value: Country) => void
}

const currencyOptions = [
  { value: Country.USA, content: Country.USA },
  { value: Country.Germany, content: Country.Germany },
  { value: Country.Israel, content: Country.Israel },
  { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = (props: CountrySelectProps) => {
  const {
    className = '',
    value,
    readonly,
    onChange,
  } = props;
  const { t } = useTranslation();

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select className={classNames('', {}, [className])}
      options={currencyOptions}
      value={value}
      placeholder={t('Select country')}
      readOnly={readonly}
      onChange={handleChange}
    />
  );
};
