import { Component } from '@angular/core';
import { ArticleFacade } from '@llp/features/articles/state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'llp-category-articles',
  templateUrl: './category-articles.component.html',
  styleUrls: ['./category-articles.component.scss'],
})
export class CategoryArticlesComponent {
  articlesOfSelectedCategory$ = this.articleFacade.articlesOfSelectedCategory$;
  selectedCategory$ = this.articleFacade.selectedCategory$;

  constructor(
    private articleFacade: ArticleFacade,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleFacade.getArticlesByCategoryId(+params['id']);
    });
  }
}
