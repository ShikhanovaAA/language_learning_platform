import { UniversalRequestApiInterceptor } from '@llp/shared/interceptors';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UNIVERSAL_LOCAL_STORAGE } from '@ng-web-apis/universal';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [AppComponent],
  providers: [
  UNIVERSAL_LOCAL_STORAGE,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalRequestApiInterceptor,
    multi: true,
  },
],
})
export class AppServerModule {}
