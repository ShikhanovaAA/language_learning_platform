import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { clearState } from '@llp/util/meta-reducer';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UiProgressBarModule } from '@llp/ui/ui-kit/progress-bar';
import { AuthStateModule } from '@llp/features/auth/state';
import { ArticleStateModule } from '@llp/features/article/state';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '@llp/shared/environments';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    AuthStateModule,
    ArticleStateModule,
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
    UiProgressBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
