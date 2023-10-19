import { Component, Input } from '@angular/core';
import { Quiz } from '@llp/models';

@Component({
  selector: 'llp-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss'],
})
export class QuizItemComponent {
  @Input() quiz!: Quiz;
}
