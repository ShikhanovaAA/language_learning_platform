import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ConfirmationDialogService {
  constructor(private matDialog: MatDialog) {}

  openDialog(dialogConfig: MatDialogConfig): Observable<boolean> {
    return this.matDialog.open(ConfirmationDialogComponent, {
      ...dialogConfig
    })
    .afterClosed();
  }
}
