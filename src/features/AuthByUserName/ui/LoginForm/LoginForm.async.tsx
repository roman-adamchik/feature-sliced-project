import { type FC, lazy } from 'react';
import { type LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  async () =>
    await new Promise((resolve) => {
      // only for testing purposes
      setTimeout(() => { resolve(import('./LoginForm')); }, 500);
    }),
);

export default LoginFormAsync;
