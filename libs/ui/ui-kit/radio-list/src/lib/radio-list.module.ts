import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioListComponent } from './components/radio-list/radio-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RadioListComponent],
  exports: [RadioListComponent]
})
export class UiRadioListModule {}
