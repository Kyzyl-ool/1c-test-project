import React from 'react';

type Page = {
  path: string;
  content: React.ReactNode;
  name: string;
};

export const pages: Page[] = [
  {
    path: '/',
    content: <>Main content</>,
    name: 'Главная'
  },
  {
    path: '/statistics',
    content: <>Stats</>,
    name: 'Статистика'
  },
  {
    path: '/records',
    content: <>Records</>,
    name: 'Записи'
  }
];
