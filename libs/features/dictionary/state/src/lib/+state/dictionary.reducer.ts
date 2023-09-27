import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { DictionaryWord } from '@llp/models';
import * as DictionaryActions from './dictionary.actions';

export const DICTIONARY_FEATURE_KEY = 'dictionary';

export interface DictionaryState extends EntityState<DictionaryWord> {
  dictionaryWords: DictionaryWord[];
}

export interface DictionaryPartialState {
  readonly [DICTIONARY_FEATURE_KEY]: DictionaryState;
}

export const dictionaryAdapter: EntityAdapter<DictionaryWord> = createEntityAdapter<DictionaryWord>();

export const initialDictionaryState: DictionaryState = dictionaryAdapter.getInitialState({
  dictionaryWords: []
});

const reducer = createReducer(
  initialDictionaryState,
  on(DictionaryActions.GetDictionaryWordsSuccess, (state, { words }) => ({
    ...state,
    dictionaryWords: words,
  })),
  on(DictionaryActions.AddWordToDictionarySuccess, (state, { word }) => ({
    ...state,
    dictionaryWords: state.dictionaryWords.concat(word),
  })),
);

export function dictionaryReducer(state: DictionaryState | undefined, action: Action) {
  return reducer(state, action);
}
