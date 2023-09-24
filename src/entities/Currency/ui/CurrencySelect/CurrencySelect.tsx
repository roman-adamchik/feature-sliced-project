import { Currency } from '../../model/types/currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  readOnly?: boolean;
  onChange?: (value: Currency) => void;
}

const currencyOptions = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.ILS, content: Currency.ILS },
  { value: Currency.BYN, content: Currency.BYN },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
  const { className = '', value, readOnly, onChange } = props;
  const { t } = useTranslation();

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  const listBoxProps = {
    onChange: handleChange,
    className: classNames('', {}, [className]),
    items: currencyOptions,
    value,
    defaultValue: t('Select currency'),
    label: t('Select currency'),
    readOnly,
    direction: 'top right' as const,
  };

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={<ListBox {...listBoxProps} />}
      off={<ListBoxDeprecated {...listBoxProps} />}
    />
  );
};
