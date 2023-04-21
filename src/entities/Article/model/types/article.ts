import { type User } from 'entities/User';
import { type ArticleBlockType } from '../consts/consts';

export interface ArticleCodeBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleCodeBase {
  type: ArticleBlockType.CODE
  code: string
}

export interface ArticleImageBlock extends ArticleCodeBase {
  type: ArticleBlockType.IMAGE
  src: string
  title?: string
}

export interface ArticleTextBlock extends ArticleCodeBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
  id: string
  title: string
  user: User
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: string[]
  blocks: ArticleBlock[]
}
