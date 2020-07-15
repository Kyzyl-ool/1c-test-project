import React, { useLayoutEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export type DataEntry = {
  month: string;
  income: number;
  expenses: number;
};

interface IStatistics {
  data: Array<DataEntry>;
  componentId: string;
}

export const MonthlyStatistics: React.FC<IStatistics> = (props) => {
  const { componentId, ...rest } = props;
  const chart = useRef(null);

  useLayoutEffect(() => {
    // create chart
    // Create chart instance
    const x = am4core.create(componentId, am4charts.XYChart);

    // Add data
    x.data = props.data;

    // Create axes
    const categoryAxis = x.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'month';
    categoryAxis.numberFormatter.numberFormat = '#';
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    const valueAxis = x.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = true;

    // Create series
    function createSeries(field, name) {
      const series = x.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = 'month';
      series.name = name;
      series.columns.template.tooltipText = '{name}: [bold]{valueX}[/]';
      series.columns.template.height = am4core.percent(100);
      series.sequencedInterpolation = true;

      const valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = '{valueX}';
      valueLabel.label.horizontalCenter = 'left';
      valueLabel.label.dx = 10;
      valueLabel.label.hideOversized = false;
      valueLabel.label.truncate = false;

      const categoryLabel = series.bullets.push(new am4charts.LabelBullet());
      categoryLabel.label.text = '{name}';
      categoryLabel.label.horizontalCenter = 'right';
      categoryLabel.label.dx = -10;
      categoryLabel.label.fill = am4core.color('#fff');
      categoryLabel.label.hideOversized = false;
      categoryLabel.label.truncate = false;
    }

    createSeries('income', 'Поступления');
    createSeries('expenses', 'Затраты');

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return <div id={componentId} style={{ width: '100%', height: '500px' }} />;
};
