import { type User } from 'entities/User';

export interface Comment {
  id: string
  user: User
  text: string
  articleId: string
}
