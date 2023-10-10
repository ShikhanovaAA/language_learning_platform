import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DICTIONARY_FEATURE_KEY, DictionaryState } from './dictionary.reducer';

export const selectDictionaryState = createFeatureSelector<DictionaryState>(DICTIONARY_FEATURE_KEY);

export const selectDictionaryWords = createSelector(selectDictionaryState, (state: DictionaryState) => (
  state.dictionaryWords
));
