import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './pages/dictionary/dictionary.component';
import { DictionaryPagesRoutingModule } from './dictionary-pages-routing.module';
import { DictionaryStateModule } from '@llp/features/dictionary/state';

@NgModule({
  imports: [
    CommonModule,
    DictionaryPagesRoutingModule,
    DictionaryStateModule,
  ],
  declarations: [DictionaryComponent],
})
export class DictionaryPagesModule {}
