import { User } from '../user/user';

export interface NewWord {
  word: string;
}

export interface DictionaryWord {
  id: number;
  word: string;
  translation: string;
  example: string;
  userId: User['id'];
}

export interface TranslationDto {
  translation: string;
}
