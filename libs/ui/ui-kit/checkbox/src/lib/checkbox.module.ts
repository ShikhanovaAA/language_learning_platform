import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
})
export class UiCheckboxModule {}
