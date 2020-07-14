import React from 'react';
import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { TitleProps } from 'antd/es/typography/Title';
import classNames from 'classnames';
import './index.scss';

const { Text: AntText, Title: AntTitle } = Typography;

type TextSize = 'sm' | 'base' | 'lg';

type TextColor = 'primary' | 'header' | 'black' | 'white';

interface IText extends TextProps {
  size?: TextSize;
  link?: string;
  color?: TextColor;
  block?: boolean;
  inline?: boolean;
  wrap?: boolean;
}

type ITitle = TitleProps;

const Text: React.FC<IText> = (props) => {
  const { children, size, className, link, color, block, inline, wrap = true, ...rest } = props;
  console.assert(block !== inline || (block === inline && !block));

  const classes = classNames({
    [className]: true,
    ['text']: true,
    [size && `text_${size}`]: true,
    ['text_linked']: link,
    ['text_header-color']: color === 'header',
    ['text_black-color']: color === 'black',
    ['text_white-color']: color === 'white',
    ['text_block']: block,
    ['text_inline']: inline,
    ['text_nowrap']: !wrap
  });

  return (
    <AntText className={classes} {...rest}>
      {link ? (
        <a target="_blank" rel="noreferrer" href={link}>
          {children}
        </a>
      ) : (
        children
      )}
    </AntText>
  );
};

const Title: React.FC<ITitle> = (props) => {
  const { children, ...rest } = props;
  return <AntTitle {...rest}>{children}</AntTitle>;
};

export default {
  Title,
  Text
};
