import { Component, Input } from '@angular/core';
import { Reader } from '@llp/models';

@Component({
  selector: 'llp-reader-count',
  templateUrl: './reader-count.component.html',
  styleUrls: ['./reader-count.component.scss'],
})
export class ReaderCountComponent {
  @Input() readers!: Reader[];
}
