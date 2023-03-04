import { type StateSchema } from 'app/providers/StoreProvider';

export const getProfileName = (state: StateSchema) => state.profile?.data?.name || '';
