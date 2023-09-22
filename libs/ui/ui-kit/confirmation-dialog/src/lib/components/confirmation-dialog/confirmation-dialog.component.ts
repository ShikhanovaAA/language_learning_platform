import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogData } from '@llp/model';

@Component({
  selector: 'llp-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData,
  ) {}

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
