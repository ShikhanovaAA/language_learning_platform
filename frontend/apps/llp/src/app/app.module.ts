import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { clearState } from '@llp/util/meta-reducer';
import { HttpClientModule } from '@angular/common/http';
import { UiProgressBarModule } from '@llp/ui/progress-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [clearState],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    UiProgressBarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
