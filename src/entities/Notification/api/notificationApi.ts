import { rtkApi } from '@/shared/api/rtkApi';
import { type Notification } from '../model/types/notification';

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationsList: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
  overrideExisting: false,
});

export const useNotifications = notificationsApi.useGetNotificationsListQuery;
