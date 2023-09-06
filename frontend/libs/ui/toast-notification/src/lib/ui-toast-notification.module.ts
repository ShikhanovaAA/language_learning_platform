import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastNotificationService } from './toast-notification.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  declarations: [ToastNotificationComponent],
  exports: [ToastNotificationComponent],
  providers: [ToastNotificationService]
})
export class UiToastNotificationModule {}
