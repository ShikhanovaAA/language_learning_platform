import { Component, Input } from '@angular/core';
import { Article } from '@llp/model';

@Component({
  selector: 'llp-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent {
  @Input() article!: Article;
}
