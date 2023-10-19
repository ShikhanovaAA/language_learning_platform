import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import { Component } from '@angular/core';

@Component({
  selector: "llp-quiz-stepper",
  templateUrl: "./quiz-stepper.component.html",
  styleUrls: ["./quiz-stepper.component.scss"],
  providers: [{ provide: CdkStepper, useExisting: QuizStepperComponent }],
})
export class QuizStepperComponent extends CdkStepper {
  setIndex(index: number): void {
    this.selectedIndex = index;
  }

  trackByFn(index: number, step: CdkStep) {
    return step.stepLabel;
  }
}
