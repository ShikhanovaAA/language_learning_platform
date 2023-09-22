import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '@llp/model';

const WORD_PER_MENUTE = 150;

@Pipe({
  name: 'readingTime',
  pure: true,
})
export class ReadingTimePipe implements PipeTransform {
  transform(text: Article['text']): string {
    const wordCount = text.split(' ').length;
    const minutes = Math.trunc(wordCount / WORD_PER_MENUTE);
    const seconds = Math.floor(wordCount % WORD_PER_MENUTE / (WORD_PER_MENUTE / 60));

    return `${minutes}m ${seconds}s`;
  }
}
