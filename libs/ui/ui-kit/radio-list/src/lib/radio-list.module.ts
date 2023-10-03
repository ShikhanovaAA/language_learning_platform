import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioListComponent } from './components/radio-list/radio-list.component';
import { RadioListBilderComponent } from './components/radio-list-builder/radio-list-builder.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
  ],
  declarations: [
    RadioListComponent,
    RadioListBilderComponent,
  ],
  exports: [
    RadioListComponent,
    RadioListBilderComponent,
  ]
})
export class UiRadioListModule {}
