import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionTextDirective } from './selection.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DictionaryStateModule } from '@llp/features/dictionary/state';
import { ConfirmationDialogModule } from '@llp/ui/ui-kit/confirmation-dialog';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    DictionaryStateModule,
    ConfirmationDialogModule,
  ],
  declarations: [
    SelectionTextDirective,
  ],
  exports: [SelectionTextDirective],
})
export class TextSelectionDirectiveModule {}
