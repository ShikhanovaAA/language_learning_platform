import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textWithoutHtmlTags',
  pure: true,
})
export class TextWithoutHtmlTagsPipe implements PipeTransform {
  transform(text: string): string {
    return text.replace(/&nbsp;/gi,' ').replace(/<\/?[^>]+(>|$)/g, "");
  }
}
