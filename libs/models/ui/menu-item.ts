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
    label: 'Tests',
    route: '/quizzes',
  },
  {
    label: 'Dictionary',
    route: '/dictionary',
  },
];
