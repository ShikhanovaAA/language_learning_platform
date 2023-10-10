import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './services/confirmation-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DictionaryStateModule } from '@llp/features/dictionary/state';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    DictionaryStateModule,
  ],
  declarations: [ConfirmationDialogComponent],
  exports: [ConfirmationDialogComponent],
  providers: [ConfirmationDialogService],
})
export class ConfirmationDialogModule {}
