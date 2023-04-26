import { type EntityState } from '@reduxjs/toolkit';
import { type ArticleListViewType, type Article, type ArticleSortField, type ArticleType } from '@/entities/Article';
import { type SortOrder } from '@/shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
  error?: string
  isLoading?: boolean
  view: ArticleListViewType
  page: number
  limit: number
  hasMore: boolean
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType
  _initialized?: boolean
}
