import { Component } from '@angular/core';
import { ArticleFacade } from '@llp/features/article/state';
import { Category } from '@llp/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'llp-article-layout',
  templateUrl: './article-layout.component.html',
  styleUrls: ['./article-layout.component.scss'],
})
export class ArticleLayoutComponent {
  categories$: Observable<Category[]> = this.articleFacade.allCategories$;

  constructor(private articleFacade: ArticleFacade) {}

  ngOnInit(): void {
    this.articleFacade.getAllArticles();
    this.articleFacade.getAllCategories();
  }
}
