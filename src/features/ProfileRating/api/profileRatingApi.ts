import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetProfileArgs {
  userId: string
  profileId: string
}

interface RateProfileArgs {
  userId: string
  profileId: string
  rate: number
  feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRatings: build.query<Rating[], GetProfileArgs>({
      query: ({ userId, profileId }) => ({
        url: '/profile-ratings',
        params: {
          userId,
          profileId,
        },
      }),
    }),
    rateProfile: build.mutation<void, RateProfileArgs>({
      query: (args) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),
  overrideExisting: false,
});

export const useProfileRating = profileRatingApi.useGetProfileRatingsQuery;
export const useRateProfile = profileRatingApi.useRateProfileMutation;
