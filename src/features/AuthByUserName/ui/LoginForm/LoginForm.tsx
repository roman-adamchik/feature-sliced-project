import { memo, type MouseEvent, useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginForm } from '../../model/selectors/getLogin/getLogin';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginForm);

  const handleUsernameChange = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handlePasswordChange = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleLoginClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <form className={classNames(cls.loginform, {}, [className])}>
      <Text
        title={t('Login form')}
      />
      {error && <Text
          text={t('Wrong username or password')}
          theme={TextTheme.ERROR}
        />
      }
      <Input
        type='text'
        className={cls.input}
        placeholder={t('Username')}
        autofocus
        onChange={handleUsernameChange}
        value={username}
      />
      <Input
        type='text'
        className={cls.input}
        placeholder={t('Password')}
        onChange={handlePasswordChange}
        value={password}
      />
      <Button
        className={cls.btn}
        theme={ButtonTheme.OUTLINE}
        onClick={handleLoginClick}
        disabled={isLoading}
      >
        {t('Login')}</Button>
    </form>
  );
});
