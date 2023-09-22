import { Component, Input } from '@angular/core';
import { Article } from '@llp/model';

@Component({
  selector: 'llp-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  @Input() articles!: Article[];
}
