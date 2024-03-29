import { memo, type MouseEvent, useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { useSelector } from 'react-redux';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const handleLoginClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      void dispatch(loginByUsername({ username, password }));
    },
    [dispatch, password, username],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <form className={classNames(cls.loginform, {}, [className])}>
        <Text title={t('Login form')} />
        {error && (
          <Text
            text={t('Wrong username or password')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Username')}
          autofocus
          onChange={handleUsernameChange}
          value={username}
        />
        <Input
          type="text"
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
          {t('Login')}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
