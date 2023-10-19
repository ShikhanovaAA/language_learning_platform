import { isEmpty, isEqual, xorWith } from 'lodash';

export function isArrayEqual<T> (x: Array<T>, y: Array<T>): boolean {
  return isEmpty(xorWith(x, y, isEqual));
}
