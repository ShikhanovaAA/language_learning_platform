import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDictionary from './+state/dictionary.reducer';
import { DictionaryEffects } from './+state/dictionary.effects';
import { DictionaryFacade } from './+state/dictionary.facade';
import { UiToastNotificationModule } from '@llp/ui/ui-kit/toast-notification';

@NgModule({
  imports: [
    CommonModule,
    UiToastNotificationModule,
    StoreModule.forFeature(fromDictionary.DICTIONARY_FEATURE_KEY, fromDictionary.dictionaryReducer),
    EffectsModule.forFeature([DictionaryEffects]),
  ],
  providers: [DictionaryFacade],
})
export class DictionaryStateModule {}
