export interface ErrorsMessage {
  message: string;
}

export type ValidationError = [string, ErrorsMessage];
