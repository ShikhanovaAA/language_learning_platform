import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MatIconModule } from '@angular/material/icon';
import { CheckboxBuilderComponent } from './components/checkbox-builder/checkbox-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupPipeModule } from '@llp/shared/pipes/form-group';
import { FormControlErrorsDirectiveModule } from '@llp/shared/directives/form-control-errors';
import { UiInputModule } from '@llp/ui/ui-kit/input';
import { FormValidationErrorsModule } from '@llp/ui/components/form-validation-errors';
import { CheckboxQuizViewComponent } from './components/checkbox-quiz-view/checkbox-quiz-view.component';
import {CheckboxPassedQuizViewComponent} from './components/checkbox-passed-quiz-view/checkbox-passed-quiz-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    UiInputModule,
    FormGroupPipeModule,
    FormControlErrorsDirectiveModule,
    FormValidationErrorsModule,
  ],
  declarations: [
    CheckboxComponent,
    CheckboxBuilderComponent,
    CheckboxQuizViewComponent,
    CheckboxPassedQuizViewComponent,
  ],
  exports: [
    CheckboxComponent,
    CheckboxBuilderComponent,
    CheckboxQuizViewComponent,
    CheckboxPassedQuizViewComponent,
  ],
})
export class UiCheckboxModule {}
