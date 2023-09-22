import { User } from '../user';
import { Category } from './category';

export interface Article {
  id: number;
  title: string;
  text: string;
  categoryId: number;
  category: Category;
  author: User;
  createdAt: Date;
  readers: Reader[];
  description: string;
  image: string;
  keywords: string[];
}

export interface Reader {
  id: number;
}
