import React from 'react';
import { StatisticsWrapper } from 'pages/main/content/statistics/wrapper';
import { RecordsPage } from './records';
import { SettingsPage } from 'pages/settings';
import { MonthlyStatistics } from 'pages/monthly';
import { MonthlyStatisticsWrapper } from 'pages/monthly/wrapper';

type Page = {
  path: string;
  content: React.ReactNode;
  name: string;
};

export const pages: Page[] = [
  {
    path: '/',
    content: <MonthlyStatisticsWrapper />,
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
