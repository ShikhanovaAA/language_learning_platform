import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MatIconModule } from '@angular/material/icon';
import { CheckboxBuilderComponent } from './components/checkbox-builder/checkbox-builder.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
  ],
  declarations: [
    CheckboxComponent,
    CheckboxBuilderComponent
  ],
  exports: [
    CheckboxComponent,
    CheckboxBuilderComponent
  ],
})
export class UiCheckboxModule {}
