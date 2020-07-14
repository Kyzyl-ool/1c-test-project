import React, { useMemo } from 'react';
import { Statistics } from 'pages/main/content/statistics/index';
import Typography from 'components/Typography';
import useSWR from 'swr/esm/use-swr';
import { localDB } from '../../../../localStorageDB';
const { Text, Title } = Typography;
import _ from 'lodash';
import { Spin } from 'antd';
import './index.scss';

const statisticsComponent = (data, componentId: string) => {
  return <Statistics data={data} componentId={componentId} />;
};

export const StatisticsWrapper: React.FC = (props) => {
  const { data: recordsRows } = useSWR('records', (key: string) => localDB.queryAll(key, {}));
  const { data: categoriesRows } = useSWR('categories', (key: string) => localDB.queryAll(key, {}), {});
  const getCategoryDataById = useMemo(() => {
    if (!categoriesRows) {
      return {};
    }
    const result = {};
    categoriesRows.forEach((value) => Object.assign(result, { [value.ID]: { name: value.name, color: value.color } }));
    return result;
  }, [categoriesRows]);

  const grouped = _.groupBy(recordsRows, 'categoryId');

  const accruals =
    !_.isEmpty(getCategoryDataById) &&
    Object.keys(grouped)
      .filter((value) => Number(grouped[value][0].amount) >= 0)
      .map((key) => ({
        name: getCategoryDataById[key].name,
        children: grouped[key].map((value) => ({
          name: value.name,
          value: Math.abs(Number(value.amount))
        }))
      }));
  const costs =
    !_.isEmpty(getCategoryDataById) &&
    Object.keys(grouped)
      .filter((value) => Number(grouped[value][0].amount) < 0)
      .map((key) => ({
        name: getCategoryDataById[key].name,
        children: grouped[key].map((value) => ({
          name: value.name,
          value: Math.abs(Number(value.amount))
        }))
      }));
  return (
    <>
      <div className={'charts-wrapper'}>
        <div className={'charts-wrapper__left'}>
          <Title level={4}>Поступления</Title>
          {accruals ? statisticsComponent(accruals, 'accruals-chart-div') : <Spin>Загрузка</Spin>}
        </div>
        <div className={'charts-wrapper__right'}>
          <Title level={4}>Затраты</Title>
          {accruals ? statisticsComponent(costs, 'costs-chart-div') : <Spin>Загрузка</Spin>}
        </div>
      </div>
    </>
  );
};
