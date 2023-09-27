import { DictionaryWord } from '@llp/models';
import { createAction, props } from '@ngrx/store';

export const GetDictionaryWords = createAction('[Dictionary] Get Dictionary Words');

export const GetDictionaryWordsSuccess = createAction('[Dictionary] Get Dictionary Words Success', props<{ words: DictionaryWord[] }>());

export const GetDictionaryWordsFail = createAction('[Dictionary] Get Dictionary Words Fail');


export const AddWordToDictionary = createAction('[Dictionary] Add Word To Dictionary', props<{ word: string }>());

export const AddWordToDictionarySuccess = createAction('[Dictionary] Add Word To Dictionary Success', props<{ word: DictionaryWord }>());

export const AddWordToDictionaryFail = createAction('[Dictionary] Add Word To Dictionary Fail');


export const DeleteWordFromDictionary = createAction('[Dictionary] Delete Word From Dictionary', props<{ wordId: DictionaryWord['id'] }>());

export const DeleteWordFromDictionarySuccess = createAction('[Dictionary] Delete Word From Dictionary Success', props<{ wordId: DictionaryWord['id'] }>());

export const DeleteWordFromDictionaryFail = createAction('[Dictionary] Delete Word From Dictionary Fail');
