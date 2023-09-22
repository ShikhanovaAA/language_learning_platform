import { Injectable, inject } from '@angular/core';
import { DictionaryWord } from '@llp/model';
import { Store, Action, select } from '@ngrx/store';

import * as DictionaryActions from './dictionary.actions';
import * as DictionarySelectors from './dictionary.selectors';

@Injectable()
export class DictionaryFacade {
  private readonly store = inject(Store);

  dictionaryWords$ = this.store.pipe(select(DictionarySelectors.selectDictionaryWords));

  getDictionaryWords() {
    this.dispatch(DictionaryActions.GetDictionaryWords());
  }

  addWordToDictionary(word: string) {
    this.dispatch(DictionaryActions.AddWordToDictionary({ word }));
  }

  deleteWordFromDictionary(wordId: DictionaryWord['id']) {
    this.dispatch(DictionaryActions.DeleteWordFromDictionary({ wordId }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
