import { Directive, HostListener, Inject } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { ConfirmationDialogService } from '@llp/ui/ui-kit/confirmation-dialog';
import { getAddWordToDictionaryDialogData } from './misc/add-word-dialog-data';
import { DictionaryFacade}  from '@llp/features/dictionary/state';
import { DictionaryService} from '@llp/features/dictionary/data-access';
import { capitalizeFirstLetter } from '@llp/util/strings';

@Directive({
  selector: '[selectionText]'
})
export class SelectionTextDirective {
  constructor(
    @Inject(WINDOW) private window: Window,
    private confirmationDialogService: ConfirmationDialogService,
    private dictionaryFacade: DictionaryFacade,
    private dictionaryService: DictionaryService
  ) {}

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    const selection = this.window.getSelection()?.toString().trim();
    if (!selection) return;

    this.dictionaryService.translateWord(selection).subscribe(result => {
      const dialogData = getAddWordToDictionaryDialogData(capitalizeFirstLetter(selection), result.translation, event);

      this.confirmationDialogService.openDialog(dialogData).subscribe(isConfirmed => {
        if (!isConfirmed) return;
        this.dictionaryFacade.addWordToDictionary(selection);
      });
    })
  }
}
