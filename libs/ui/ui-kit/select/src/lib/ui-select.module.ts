import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { MatIconModule } from '@angular/material/icon';
import { SelectBuilderComponent } from './select-builder/select-builder.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
  ],
  declarations: [
    SelectComponent,
    SelectBuilderComponent,
  ],
  exports: [
    SelectComponent,
    SelectBuilderComponent,
  ],
})
export class UiSelectModule {}
