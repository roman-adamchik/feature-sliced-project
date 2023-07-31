import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleArgs {
  userId: string;
  articleId: string;
}

interface RateArticleArgs {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRatings: build.query<Rating[], GetArticleArgs>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArgs>({
      query: (args) => ({
        url: '/article-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),
  overrideExisting: false,
});

export const useArticleRatings = articleRatingApi.useGetArticleRatingsQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
