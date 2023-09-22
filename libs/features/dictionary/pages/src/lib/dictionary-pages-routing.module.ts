import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@llp/ui/components/main-layout';
import { DictionaryComponent } from './pages/dictionary/dictionary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'list',
        component: DictionaryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DictionaryPagesRoutingModule {}
