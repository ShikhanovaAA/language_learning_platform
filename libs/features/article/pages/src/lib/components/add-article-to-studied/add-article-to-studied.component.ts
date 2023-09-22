import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article, StudiedArticle, User } from '@llp/model';

@Component({
  selector: 'llp-add-article-to-studied',
  templateUrl: './add-article-to-studied.component.html',
  styleUrls: ['./add-article-to-studied.component.scss'],
})
export class AddArticleToStudiedComponent {
  @Input() article!: Article;
  @Input() user!: User | null;

  @Output() addToStudied = new EventEmitter<StudiedArticle>();

  addArticleToStudied(articleId: Article['id'], userId: User['id']) {
    this.addToStudied.emit({ articleId, userId });
  }
}
