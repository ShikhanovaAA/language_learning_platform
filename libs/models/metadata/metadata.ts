export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  type: string;
  image: string;
}

export const defaultMetadata: Metadata = {
  title: 'Language learning platform',
  description: 'Platform for learning English',
  keywords: ['English grammar', 'tests','dictionary'],
  type: 'website',
  image: 'assets/images/like-logo.png',
}
