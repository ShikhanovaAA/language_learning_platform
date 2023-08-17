import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthDataAccessModule } from '@llp/features/auth/data-access';
import { AuthFacade } from './+state/auth.facade';
import { UtilTokenServiceModule } from '@llp/util/token-service';

@NgModule({
  imports: [
    CommonModule,
    AuthDataAccessModule,
    UtilTokenServiceModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthFacade,
  ],
})
export class AuthStateModule {}
