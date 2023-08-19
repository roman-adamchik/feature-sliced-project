import { JsonSettings } from './../model/types/jsonSettings';
import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';

export interface SetUserJsonSettings {
  userId: string;
  jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setUserJsonSettings: build.mutation<User, SetUserJsonSettings>({
      query: ({userId, jsonSettings}) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const setJsonSettingsMutation = userApi.endpoints.setUserJsonSettings.initiate;