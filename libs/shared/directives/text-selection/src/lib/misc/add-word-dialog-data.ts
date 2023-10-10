import { DialogPosition, MatDialogConfig } from '@angular/material/dialog';

export const getAddWordToDictionaryDialogData = (
    word: string,
    translation:
    string,
    event: MouseEvent,
  ): MatDialogConfig => {
  let data = {
    title: `${word} - ${translation}`,
    message: `Do you want to add "${word}" to your dictionary?`,
    confirmButtonText: 'Add',
    cancelButtonText: 'Cancel',
  }

  const position: DialogPosition = {
    top: `${event.clientY + 15}px`,
    left: `${event.clientX - 20}px`,
  };

  const wordCount = word.split(' ').length;

  if (wordCount === 1) {
    return {
      data,
      position,
      panelClass: 'add-word-to-dictionary',
    };
  }

  data = {
    ...data,
    title: `Do you want to add this text to your dictionary?`,
    message: `${word} - ${translation}`,
  }

  return {
    data,
    position,
    panelClass: 'add-word-to-dictionary',
  };
}
