import { AuthFacade } from '@llp/features/auth/state';
import { Component } from '@angular/core';
import { ArticleFacade } from '@llp/features/article/state';
import { Article } from '@llp/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'llp-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent {
  articles$: Observable<Article[]> = this.articleFacade.allArticles$;
  user$ = this.authFacade.user$;

  constructor(
    private articleFacade: ArticleFacade,
    private authFacade: AuthFacade,
  ) {}
}
