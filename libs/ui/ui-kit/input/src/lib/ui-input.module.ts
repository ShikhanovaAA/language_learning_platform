import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputBuilderComponent } from './components/input-builder/input-builder.component';
import { FormControlErrorsDirectiveModule } from '@llp/shared/directives/form-control-errors';
import { InputQuizViewComponent } from './components/input-quiz-view/input-quiz-view.component';
import { InputPassedQuizViewComponent } from './components/input-passed-quiz-view/input-passed-quiz-view.component';
import { FormGroupPipeModule } from '@llp/shared/pipes/form-group';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    FormControlErrorsDirectiveModule,
    FormGroupPipeModule,
  ],
  declarations: [
    InputComponent,
    InputBuilderComponent,
    InputQuizViewComponent,
    InputPassedQuizViewComponent,
  ],
  exports: [
    InputComponent,
    InputBuilderComponent,
    InputQuizViewComponent,
    InputPassedQuizViewComponent,
  ],
})
export class UiInputModule {}
