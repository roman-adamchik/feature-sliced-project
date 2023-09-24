import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Country } from '../../model/types/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  readOnly?: boolean;
  onChange?: (value: Country) => void;
}

const currencyOptions = [
  { value: Country.USA, content: Country.USA },
  { value: Country.Germany, content: Country.Germany },
  { value: Country.Israel, content: Country.Israel },
  { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = (props: CountrySelectProps) => {
  const { className = '', value, readOnly, onChange } = props;
  const { t } = useTranslation();

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  const listBoxProps = {
    className: classNames('', {}, [className]),
    items: currencyOptions,
    value,
    defaultValue: t('Select country'),
    readOnly,
    onChange: handleChange,
    direction: 'top right' as const,
    label: t('Select country'),
  };

  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={<ListBox {...listBoxProps} />}
      off={<ListBoxDeprecated {...listBoxProps} />}
    />
  );
};
