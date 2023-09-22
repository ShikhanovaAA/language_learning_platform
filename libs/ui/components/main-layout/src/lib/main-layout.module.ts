import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderModule } from '@llp/ui/components/header';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
  ],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
