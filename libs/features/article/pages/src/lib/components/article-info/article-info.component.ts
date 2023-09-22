import { Component, Input } from '@angular/core';
import { Article } from '@llp/model';

@Component({
  selector: 'llp-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss'],
})
export class ArticleInfoComponent {
  @Input() article!: Article;
}
