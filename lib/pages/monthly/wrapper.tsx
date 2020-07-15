import React from 'react';
import { DataEntry, MonthlyStatistics } from 'pages/monthly/index';
import useSWR from 'swr/esm/use-swr';
import { localDB } from '../../localStorageDB';
import { groupBy } from 'lodash';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { capitalize } from '../../utils/capitalize';
import { Spin } from 'antd';

const convertRecordsRowsIntoMonthlyStatisticsData = (recordsRows): Array<DataEntry> => {
  const tmp = groupBy(recordsRows, (item) => new Date(item.time).getMonth() + 1);

  return Object.keys(tmp).map((key) => {
    return {
      month: capitalize(format(new Date(tmp[key][0].time), 'LLLL', { locale: ru })),
      income: tmp[key].reduce((acc, curr) => acc + (Number(curr.amount) >= 0 ? curr.amount : 0), 0),
      expenses: tmp[key].reduce((acc, curr) => acc + (Number(curr.amount) < 0 ? -curr.amount : 0), 0)
    };
  });
};

const statisticsComponent = (data) => {
  return <MonthlyStatistics componentId={'monthly-statistics'} data={data} />;
};

export const MonthlyStatisticsWrapper: React.FC = (props) => {
  const { data: recordsRows } = useSWR('records', (key: string) => localDB.queryAll(key, {}));

  return (
    <>
      {recordsRows ? (
        statisticsComponent(convertRecordsRowsIntoMonthlyStatisticsData(recordsRows))
      ) : (
        <Spin>Загрузка</Spin>
      )}
    </>
  );
};
