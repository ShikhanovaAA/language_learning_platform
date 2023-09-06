export interface ToastData {
  message: string;
  type?: MessageType;
  icon?: string;
}

export enum MessageType {
  Error = 0,
  Success = 1,
  Info = 2,
}

export enum ToastDuration {
  Short = 3000,
  Long = 7000,
  Infinity = 9999999999,
}
