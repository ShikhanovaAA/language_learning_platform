import { Component, Input } from '@angular/core';
import { Article } from '@llp/models';

@Component({
  selector: 'llp-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  @Input() articles!: Article[];

  trackByFn(index: number, article: Article) {
    return article.id;
  }
}
