import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className = '' } = props;
  const { t } = useTranslation();

  return (
    <form className={classNames(cls.loginform, {}, [className])}>
      <Input
        type='text'
        className={cls.input}
        placeholder={t('Username')}
        autofocus
      />
      <Input
        type='text'
        className={cls.input}
        placeholder={t('Password')}
      />
      <Button
        className={cls.btn}
      >
        {t('Login')}</Button>
    </form>
  );
};
