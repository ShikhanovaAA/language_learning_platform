import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { provideClientHydration } from '@angular/platform-browser';
import { UniversalModule } from '@ng-web-apis/universal';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    UniversalModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
