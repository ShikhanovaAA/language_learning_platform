import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { MatIconModule } from '@angular/material/icon';
import { SelectBuilderComponent } from './select-builder/select-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupPipeModule } from '@llp/shared/pipes/form-group';
import { FormControlErrorsDirectiveModule } from '@llp/shared/directives/form-control-errors';
import { UiInputModule } from '@llp/ui/ui-kit/input';
import { FormValidationErrorsModule } from '@llp/ui/components/form-validation-errors';
import { SelectQuizViewComponent } from './select-quiz-view/select-quiz-view.component';
import { SelectPassedQuizViewComponent } from './select-passed-quiz-view/select-passed-quiz-view.component';

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
    SelectComponent,
    SelectBuilderComponent,
    SelectQuizViewComponent,
    SelectPassedQuizViewComponent,
  ],
  exports: [
    SelectComponent,
    SelectBuilderComponent,
    SelectQuizViewComponent,
    SelectPassedQuizViewComponent,
  ],
})
export class UiSelectModule {}
