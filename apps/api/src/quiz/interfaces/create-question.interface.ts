export interface CreateQuestion {
  quizId: number;
  label: string;
  order: number;
  required: boolean;
  controlType: string;
}
