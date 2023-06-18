import { type FC, lazy } from 'react';
import { type LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  async () => await import('./LoginForm'),
);

export default LoginFormAsync;
