import { DictionaryWord } from '@llp/models';
import { Component, OnInit } from '@angular/core';
import { DictionaryFacade } from '@llp/features/dictionary/state';

@Component({
  selector: 'llp-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
})
export class DictionaryComponent implements OnInit {
  words$ = this.dictionaryFacade.dictionaryWords$;

  constructor(private dictionaryFacade: DictionaryFacade) {}

  ngOnInit(): void {
    this.dictionaryFacade.getDictionaryWords();
  }

  trackByFn(index: number, word: DictionaryWord) {
    return word.id;
  }
}
