import { Component, Input } from '@angular/core';
import { Reader } from '@llp/model';

@Component({
  selector: 'llp-reader-count',
  templateUrl: './reader-count.component.html',
  styleUrls: ['./reader-count.component.scss'],
})
export class ReaderCountComponent {
  @Input() readers!: Reader[];
}
