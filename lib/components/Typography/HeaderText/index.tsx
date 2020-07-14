import React from 'react';
import classNames from 'classnames';
import './index.scss';
import Typography from 'components/Typography';
import { TextProps } from 'antd/es/typography/Text';

const { Text, Title } = Typography;

type Color = 'black' | 'green' | 'white';

interface IHeaderText extends TextProps {
  color?: Color;
}

export const HeaderText: React.FC<IHeaderText> = (props) => {
  const { children, className, color = 'black', ...rest } = props;
  const classes = classNames({
    ['header-text']: true,
    [`header-text_${color}`]: true,
    [className]: true
  });
  return (
    <Text className={classes} {...rest}>
      {children}
    </Text>
  );
};
