import { Component, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { ToastData } from '@llp/model';

@Component({
  selector: 'llp-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss'],
})
export class ToastNotificationComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<ToastNotificationComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: ToastData
  ) {}
}
