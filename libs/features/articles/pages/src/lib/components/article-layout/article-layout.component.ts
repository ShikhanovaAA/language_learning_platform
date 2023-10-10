import { Component, OnInit } from '@angular/core';
import { ArticleFacade } from '@llp/features/articles/state';
import { Category } from '@llp/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'llp-article-layout',
  templateUrl: './article-layout.component.html',
  styleUrls: ['./article-layout.component.scss'],
})
export class ArticleLayoutComponent implements OnInit {
  categories$: Observable<Category[]> = this.articleFacade.allCategories$;

  constructor(private articleFacade: ArticleFacade) {}

  ngOnInit(): void {
    this.articleFacade.getAllArticles();
    this.articleFacade.getAllCategories();
  }
}
