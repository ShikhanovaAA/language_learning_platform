export enum LocalStorageKeysEnum {
  THEME = 'llp-theme',
  ACCESS_TOKEN = 'llp-token'
}

export const tokenGetter = () => {
  return localStorage.getItem(LocalStorageKeysEnum.ACCESS_TOKEN) || '';
}
