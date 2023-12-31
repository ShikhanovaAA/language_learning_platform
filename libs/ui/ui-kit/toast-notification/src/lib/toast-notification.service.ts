import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { MessageType, ToastData, ToastDuration } from '@llp/models';

@Injectable()
export class ToastNotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(
    data: ToastData = { message: '', type: MessageType.Info },
    duration: ToastDuration = ToastDuration.Long,
    horizontalPosition: MatSnackBarHorizontalPosition = 'end',
  ) {
    return this.snackBar.openFromComponent(ToastNotificationComponent, {
      duration,
      data,
      horizontalPosition,
    });
  }
}
