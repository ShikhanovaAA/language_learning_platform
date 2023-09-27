import { Pipe, PipeTransform } from '@angular/core';
import { Article, User } from '@llp/models';

@Pipe({
  name: 'isStudied',
  pure: true,
})
export class IsStudiedPipe implements PipeTransform {
  transform(article: Article, user: User): boolean {
    return article.readers.some(reader => reader.id === user.id);
  }
}
