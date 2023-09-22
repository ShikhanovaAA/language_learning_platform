import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';
import { UtilTokenServiceModule } from '@llp/util/token-service';
import { UiToastNotificationModule } from '@llp/ui/ui-kit/toast-notification';

@NgModule({
  imports: [
    CommonModule,
    UtilTokenServiceModule,
    UiToastNotificationModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthFacade],
})
export class AuthStateModule {}
