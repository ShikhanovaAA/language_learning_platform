import { Component } from '@angular/core';
import { DictionaryFacade } from '@llp/features/dictionary/state';

@Component({
  selector: 'llp-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
})
export class DictionaryComponent {
  words$ = this.dictionaryFacade.dictionaryWords$;

  constructor(private dictionaryFacade: DictionaryFacade) {}

  ngOnInit(): void {
    this.dictionaryFacade.getDictionaryWords();
  }
}
