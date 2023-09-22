import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent],
})
export class UiSelectModule {}
