import { type StateSchema } from 'app/providers/StoreProvider';

export const getLoginForm = (state: StateSchema) => state?.loginForm;
