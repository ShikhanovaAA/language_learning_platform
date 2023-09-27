import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { NewWord, DictionaryWord, TranslationDto } from '@llp/models';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(private httpClient: HttpClient) {}

  getDictionaryWords(): Observable<DictionaryWord[]> {
    return this.httpClient.get<DictionaryWord[]>(`api/dictionary`);
  }

  addWordToDictionary(word: NewWord['word']): Observable<DictionaryWord> {
    return this.httpClient.post<DictionaryWord>('api/dictionary', { word });
  }

  translateWord(word: string): Observable<TranslationDto> {
    return this.httpClient.get<TranslationDto>(`api/dictionary/${word}`);
  }

  deleteWordFromDictionary(wordId: DictionaryWord['id']) {
    return this.httpClient.delete(`api/dictionary/${wordId}`);
  }
}
