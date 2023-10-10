import { Component, Input } from '@angular/core';
import { Category } from '@llp/models';

@Component({
  selector: 'llp-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  @Input() categories!: Category[];

  trackByFn(index: number, category: Category) {
    return category.id;
  }
}
