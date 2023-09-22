import { Component, Input } from '@angular/core';

@Component({
  selector: 'llp-reading-time',
  templateUrl: './reading-time.component.html',
  styleUrls: ['./reading-time.component.scss'],
})
export class ReadingTimeComponent {
  @Input() text!: string;
}
