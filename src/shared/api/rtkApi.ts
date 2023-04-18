import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCAL_STORAGE_AUTH_DATA_KEY } from 'shared/const/localStorage';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: GLOBAL_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(LOCAL_STORAGE_AUTH_DATA_KEY);
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
