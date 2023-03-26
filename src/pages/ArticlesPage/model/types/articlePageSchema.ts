import { type EntityState } from '@reduxjs/toolkit';
import { type ArticleListViewType, type Article } from 'entities/Article';

export interface ArticlePageSchema extends EntityState<Article> {
  error?: string
  isLoading?: boolean
  view: ArticleListViewType
}
