import { type LoginSchema } from '../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice.test', () => {
  test('setUsername', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '',
    };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('test')))
      .toEqual({ username: 'test' });
  });

  test('setPassword', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '',
    };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('test_password')))
      .toEqual({ password: 'test_password' });
  });
});
