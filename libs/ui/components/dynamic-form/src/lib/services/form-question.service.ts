import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '@llp/models';

@Injectable({
  providedIn: 'root',
})
export class FormQuestionService {
  mapQuestionsToFormGroup(questions: Question[]): FormGroup {
    const group: Record<Question['key'], FormControl> = {};
    const sortedQuestions = this.sortQuestions(questions);
    sortedQuestions.map(question => group[question.key] = new FormControl('', question.required ? Validators.required : []));

    return new FormGroup(group);
  }

  sortQuestions(questions: Question[]): Question[] {
    return questions.sort((a, b) => a.order - b.order);
  }
}

