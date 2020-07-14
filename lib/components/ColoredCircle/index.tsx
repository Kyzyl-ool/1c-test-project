import React from 'react';
import './index.scss';
import classNames from 'classnames';

type Size = 'small' | 'medium' | 'large';

interface IColoredCircle {
  hexColor: string;
  size?: Size;
}

export const ColoredCircle: React.FC<IColoredCircle> = (props) => {
  const { size, hexColor, ...rest } = props;

  const classes = classNames({
    ['mf-colored-circle']: true,
    [`mf-colored-circle_${size}`]: true
  });
  return <div className={classes} style={{ backgroundColor: hexColor }} />;
};
