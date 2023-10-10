import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewCategoryForm } from '../../models/new-category-form';
import { NewCategory } from '@llp/models';

@Component({
  selector: 'llp-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent {
  @Output() createCategory = new EventEmitter<NewCategory>();

  newCategoryForm = new FormGroup<NewCategoryForm>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  saveCategory() {
    if (!this.newCategoryForm.valid) return;

    const { name, description } = this.newCategoryForm.value;
    if (!name || !description) return;

    this.createCategory.emit({ name, description });
  }
}
