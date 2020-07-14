import React, { useLayoutEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_sunburst from '@amcharts/amcharts4/plugins/sunburst';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { PieceOfChart } from 'pages/main/Content/statistics/index.type';

am4core.useTheme(am4themes_animated);

interface IStatistics {
  data: Array<PieceOfChart>;
  componentId: string;
}

export const Statistics: React.FC<IStatistics> = (props) => {
  const { componentId, ...rest } = props;
  const chart = useRef(null);

  useLayoutEffect(() => {
    // create chart
    const x = am4core.create(componentId, am4plugins_sunburst.Sunburst);
    x.padding(50, 0, 100, 0);
    x.radius = am4core.percent(98);

    x.data = props.data;

    x.colors.step = 2;
    x.fontSize = 11;
    x.innerRadius = am4core.percent(10);

    // define data fields
    x.dataFields.value = 'value';
    x.dataFields.name = 'name';
    x.dataFields.children = 'children';

    const level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
    level0SeriesTemplate.hiddenInLegend = false;
    x.seriesTemplates.setKey('0', level0SeriesTemplate);

    // this makes labels to be hidden if they don't fit
    level0SeriesTemplate.labels.template.truncate = true;
    level0SeriesTemplate.labels.template.hideOversized = true;

    level0SeriesTemplate.labels.template.adapter.add('rotation', function (rotation, target) {
      target.maxWidth = target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
      target.maxHeight = Math.abs(
        ((target.dataItem.slice.arc * (target.dataItem.slice.innerRadius + target.dataItem.slice.radius)) / 2) *
          am4core.math.RADIANS
      );

      return rotation;
    });

    const level1SeriesTemplate = level0SeriesTemplate.clone();
    x.seriesTemplates.setKey('1', level1SeriesTemplate);
    level1SeriesTemplate.fillOpacity = 0.75;
    level1SeriesTemplate.hiddenInLegend = true;
    level1SeriesTemplate.labels.template.inside = false;
    level1SeriesTemplate.labels.template.fill = am4core.color('#000');
    level1SeriesTemplate.labels.template.text = '{category}: {value.value}₽';

    const legend = new am4charts.Legend();
    legend.padding(50, 0, 0, 0);
    x.legend = legend;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return <div id={componentId} style={{ width: '100%', height: '500px' }} />;
};
