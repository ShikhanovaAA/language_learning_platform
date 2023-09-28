export interface MenuItem {
  label: string;
  route: string;
}

export const MAIN_MENU: MenuItem[] = [
  {
    label: 'Articles',
    route: '/articles',
  },
  {
    label: 'Quizzes',
    route: '/quizzes',
  },
  {
    label: 'Dictionary',
    route: '/dictionary',
  },
];
