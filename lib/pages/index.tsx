import React from 'react';
import { StatisticsWrapper } from 'pages/main/Content/statistics/wrapper';
import { RecordsPage } from './records';
import { SettingsPage } from 'pages/settings';

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
    content: <StatisticsWrapper />,
    name: 'Структура'
  },
  {
    path: '/records',
    content: <RecordsPage />,
    name: 'Записи и категории'
  },
  {
    path: '/settings',
    content: <SettingsPage />,
    name: 'Настройки'
  }
];
